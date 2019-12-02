// ------- DATA ----------- 
// This variable is just to allow dev testing. When true it 
// Shows the district solution answers.
var testingMode = false;
var unAddressedIssueFlashState = true;
var cDO = [];
var flashState = true;
var flashHandState = true;
var globeShake = true;
var cCp = 0;
var noOfCountriesMax = 195;
var noOfDistricts = 21;
var noOfProblems = 20;
var gDPMax = 10;
var popMax = 10;
var healthMax = 100;
var cGdp = 0;
var cPop = 0;
var cHealth = 0;
var roundDownDigit = 0;
var pledgeDisplacement = 10;
// Setup World data 
var worldEconomy = [];
var threeCountriesSelected = false;
// ---------------------------------------------------------------------
var manifesto = {
    // Your Politicions Manifesto
    "1": "Provide More Funding For Hospitals",
    "2": "Free Car Parks at Hospitals",
    "3": "Business Rates Reduction by 5%",
    "4": "Apprenteship Government Support for Business",
    "5": "Support good Landlords & offset tax allowance on repairs",
    "6": "Funding for more police & PCO's, 20,0000",
    "7": "Build more council & affordable housing for 1st time buyers",
    // Values of each pledge
    "V1": 0,
    "V2": 0,
    "V3": 0,
    "V4": 0,
    "V5": 0,
    "V6": 0,
    "V7": 0,
    "PledgeAvailableTotalValue": 10,
    "PledgeAvailableTotalCapacity": 50,
}
// Load up your Manifesto (Pledge Priority Page)!!
function loadUpYourPledgePriorityPage() {
    var spacer = "    ";
    $("#pledge-1 h3").text("A:" + spacer + manifesto["1"]);
    $("#pledge-2 h3").text("B:" + spacer + manifesto["2"]);
    $("#pledge-3 h3").text("C:" + spacer + manifesto["3"]);
    $("#pledge-4 h3").text("D:" + spacer + manifesto["4"]);
    $("#pledge-5 h3").text("E:" + spacer + manifesto["5"]);
    $("#pledge-6 h3").text("F:" + spacer + manifesto["6"]);
    $("#pledge-7 h3").text("G:" + spacer + manifesto["7"]);
    $("#pledge-value-1 h3").text(manifesto["V1"]);
    $("#pledge-value-2 h3").text(manifesto["V2"]);
    $("#pledge-value-3 h3").text(manifesto["V3"]);
    $("#pledge-value-4 h3").text(manifesto["V4"]);
    $("#pledge-value-5 h3").text(manifesto["V5"]);
    $("#pledge-value-6 h3").text(manifesto["V6"]);
    $("#pledge-value-7 h3").text(manifesto["V7"]);
    // Loadup Total Pledge Value Units Available
    $("#PTV").text(manifesto["PledgeAvailableTotalValue"]);
}
// Problems in districts
var districtProblems = {
    // Questions		
    1: "	H	*	Waiting list  too long in A&E	",
    2: "	H	*	Prescriptions are too Expensive	",
    3: "	H	*	Serious Flu Outbreak	",
    4: "	H	*	Medical Equipment in dire state	",
    5: "	H	*	Overworked Doctors complaining of stress	",
    6: "	C	*	Increase in street-crime	",
    7: "	C	*	Increase of pick-pockets in Area	",
    8: "	C	*	Increase of drug & sales use in the area	",
    9: "	C	*	Violent assaults in the area are on the increase	",
    10: "	C	*	Unruly gang behaviour in the parks	",
    11: "	C	*	Street Drunks on the increase	",
    12: "	W	*	Cost of living on the increase	",
    13: "	E	*	Employment on the rise in the area	",
    14: "	E	*	Teen unemployment on the increase	",
    15: "	E	*	Unemployment benefit too small and ineffective	",
    16: "	W	*	Living wage poor	",
    17: "	H	*	Rise in clinical depression	",
    18: "	S	*	Lots of people report unhappines with their Job	",
    19: "	C	*	Terrorist activity on the rise	",
    20: "	W	*	Transport Cost sky-rocketing	",
    21: "	E	*	Child cost too high & mothers unable to work	",
};
var districtSolutions = {
    // Solutions		
    1: "	H	*	We promise we shall Invest 55Milion in the Health Service	",
    2: "	H	*	We Promise 50% Prescriptions discounts for all	",
    3: "	H	*	We shall import as a matter of Urgency 100k of Tami-Flu	",
    4: "	H	*	Invest more in Technical Support Staff for our Hospitals	",
    5: "	H	*	Invest in Hiring 2000 More Doctors & Medical Practitioners over 5years	",
    6: "	C	*	We shall recruit 2000 more PCO's within 2years	",
    7: "	C	*	Harsher sentences for street crime	",
    8: "	C	*	Increase in 'stop and search' In the area	",
    9: "	C	*	We pledge to Place more physical police presence on the street	",
    10: "	C	*	We will introduce more ASBO's across the board	",
    11: "	C	*	We will introduce limit of alcohol sales to categories of people	",
    12: "	W	*	We pledge to increase personal allowance per person by 3.5%	",
    13: "	E	*	We will lower business rates to incentivise businesses	",
    14: "	E	*	We will introduce financial incentives for companies offering apprenticeships	",
    15: "	E	*	We will raise  standard unemployment benefit by 2.50 per week	",
    16: "	W	*	We will raise allowance for Married Couples	",
    17: "	H	*	Pledge to invest in pyschatric medical treatments	",
    18: "	S	*	Will introduce benefits for companies that provide training for their employees	",
    19: "	C	*	Increase in armed police to be made	",
    20: "	W	*	Force freeze on fare rises for net 5 years	",
    21: "	E	*	Extra support for child care to be offered	",
};
// Districts Object representation
// d-populus ; How many people in district
// d-name ; Name of district
// d-number; district number
// d-affluence; 0-100000000.00
// d-employment ; number employed (max=dpopulus)
// d-crimes; 0-100; 0 good / 100 bad
// d-housing; Number in housing (0 > d-populus)
var District = {
    "d-populus": 0,
    "d-name": name,
    "d-number": 0,
    "d-affluence": 0,
    "d-employment": 0,
    "d-crime": 0,
    "d-housing": 0,
};
// uk- Districts
var countryDistricts = {
    '1': 'Bath',
    '2': 'Bedford',
    '3': 'Berkshire',
    '4': 'Blackburn',
    '5': 'Blackpool',
    '6': 'Bournemouth',
    '7': 'Brighton',
    '8': 'Bristol',
    '9': 'Buckinghamshire',
    '10': 'Cambridgeshire',
    '11': 'Central Bedfordshire',
    '12': 'Cheshire East',
    '13': 'Cheshire West',
    '14': 'Chester',
    '15': 'Christchurch',
    '16': 'City of London',
    '17': 'Cleveland',
    '18': 'Cornwall',
    '19': 'County Durham',
    '20': 'Cumbria',
    '21': 'Darlington',
    '22': 'Darwen',
    '23': 'Derby',
    '24': 'Derbyshire',
    '25': 'Devon',
    '26': 'Dorset',
    '27': 'East Riding',
    '28': 'East Sussex',
    '29': 'Essex',
    '30': 'Gloucestershire',
    '31': 'Greater Manchester',
    '32': 'Halton',
    '33': 'Hampshire',
    '34': 'Hartlepool',
    '35': 'Herefordshire',
    '36': 'Hertfordshire',
    '37': 'Hove',
    '38': 'Isle of Wight',
    '39': 'Isles of Scilly',
    '40': 'Kent',
    '41': 'Kingston-upon-Hull',
    '42': 'Lancashire',
    '43': 'Leicester',
    '44': 'Leicestershire',
    '45': 'Lincolnshire',
    '46': 'London boroughs',
    '47': 'Luton',
    '48': 'Medway',
    '49': 'Merseyside',
    '50': 'Middlesbrough',
    '51': 'Milton Keynes',
    '52': 'Norfolk',
    '53': 'North East Lincolnshire',
    '54': 'North East Somerset',
    '55': 'North Lincolnshire',
    '56': 'North Yorkshire',
    '57': 'Northumberland',
    '58': 'Nottingham',
    '59': 'Nottinghamshire',
    '60': 'Oxfordshire',
    '61': 'Peterborough',
    '62': 'Plymouth',
    '63': 'Poole',
    '64': 'Portsmouth',
    '65': 'Redcar',
    '66': 'Rutland',
    '67': 'Shropshire',
    '68': 'Somerset',
    '69': 'South Gloucestershire',
    '70': 'South Yorkshire',
    '71': 'Southampton',
    '72': 'Southend-on-Sea',
    '73': 'Staffordshire',
    '74': 'Stockton-on-Tees',
    '75': 'Stockton-on-Tees',
    '76': 'Stoke-on-Trent',
    '77': 'Suffolk',
    '78': 'Surrey',
    '79': 'Swindon',
    '80': 'Telford',
    '81': 'Thurrock',
    '82': 'Torbay',
    '83': 'Tyne and Wear',
    '84': 'Warrington',
    '85': 'Warwickshire',
    '86': 'West Midlands',
    '87': 'West Sussex',
    '88': 'West Yorkshire',
    '89': 'Wiltshire',
    '90': 'Worcestershire',
    '91': 'Wrekin',
    '92': 'York',
    '93': 'Yorkshire',
};
// Country data
var countries = {
    '1': 'Afghanistan',
    '2': 'Albania',
    '3': 'Algeria',
    '4': 'Andorra',
    '5': 'Angola',
    '6': 'Antigua and Barbuda',
    '7': 'Argentina',
    '8': 'Armenia',
    '9': 'Australia',
    '10': 'Austria',
    '11': 'Azerbaijan',
    '12': 'Bahamas',
    '13': 'Bahrain',
    '14': 'Bangladesh',
    '15': 'Barbados',
    '16': 'Belarus',
    '17': 'Belgium',
    '18': 'Belize',
    '19': 'Benin',
    '20': 'Bhutan',
    '21': 'Bolivia',
    '22': 'Bosnia and Herzegovina',
    '23': 'Botswana',
    '24': 'Brazil',
    '25': 'Brunei',
    '26': 'Bulgaria',
    '27': 'Burkina Faso',
    '28': 'Burundi',
    '29': 'Côte dIvoire',
    '30': 'Cabo Verde',
    '31': 'Cambodia',
    '32': 'Cameroon',
    '33': 'Canada',
    '34': 'Central African Republic',
    '35': 'Chad',
    '36': 'Chile',
    '37': 'China',
    '38': 'Colombia',
    '39': 'Comoros',
    '40': 'Congo (Congo-Brazzaville)',
    '41': 'Costa Rica',
    '42': 'Croatia',
    '43': 'Cuba',
    '44': 'Cyprus',
    '45': 'Czechia (Czech Republic)',
    '46': 'Democratic Republic of the Congo',
    '47': 'Denmark',
    '48': 'Djibouti',
    '49': 'Dominica',
    '50': 'Dominican Republic',
    '51': 'Ecuador',
    '52': 'Egypt',
    '53': 'El Salvador',
    '54': 'Equatorial Guinea',
    '55': 'Eritrea',
    '56': 'Estonia',
    '57': 'Eswatini',
    '58': 'Ethiopia',
    '59': 'Fiji',
    '60': 'Finland',
    '61': 'France',
    '62': 'Gabon',
    '63': 'Gambia',
    '64': 'Georgia',
    '65': 'Germany',
    '66': 'Ghana',
    '67': 'Greece',
    '68': 'Grenada',
    '69': 'Guatemala',
    '70': 'Guinea',
    '71': 'Guinea-Bissau',
    '72': 'Guyana',
    '73': 'Haiti',
    '74': 'Holy See',
    '75': 'Honduras',
    '76': 'Hungary',
    '77': 'Iceland',
    '78': 'India',
    '79': 'Indonesia',
    '80': 'Iran',
    '81': 'Iraq',
    '82': 'Ireland',
    '83': 'Israel',
    '84': 'Italy',
    '85': 'Jamaica',
    '86': 'Japan',
    '87': 'Jordan',
    '88': 'Kazakhstan',
    '89': 'Kenya',
    '90': 'Kiribati',
    '91': 'Kuwait',
    '92': 'Kyrgyzstan',
    '93': 'Laos',
    '94': 'Latvia',
    '95': 'Lebanon',
    '96': 'Lesotho',
    '97': 'Liberia',
    '98': 'Libya',
    '99': 'Liechtenstein',
    '100': 'Lithuania',
    '101': 'Luxembourg',
    '102': 'Madagascar',
    '103': 'Malawi',
    '104': 'Malaysia',
    '105': 'Maldives',
    '106': 'Mali',
    '107': 'Malta',
    '108': 'Marshall Islands',
    '109': 'Mauritania',
    '110': 'Mauritius',
    '111': 'Mexico',
    '112': 'Micronesia',
    '113': 'Moldova',
    '114': 'Monaco',
    '115': 'Mongolia',
    '116': 'Montenegro',
    '117': 'Morocco',
    '118': 'Mozambique',
    '119': 'Myanmar (formerly Burma)',
    '120': 'Namibia',
    '121': 'Nauru',
    '122': 'Nepal',
    '123': 'Netherlands',
    '124': 'New Zealand',
    '125': 'Nicaragua',
    '126': 'Niger',
    '127': 'Nigeria',
    '128': 'North Korea',
    '129': 'North Macedonia',
    '130': 'Norway',
    '131': 'Oman',
    '132': 'Pakistan',
    '133': 'Palau',
    '134': 'Palestine State',
    '135': 'Panama',
    '136': 'Papua New Guinea',
    '137': 'Paraguay',
    '138': 'Peru',
    '139': 'Philippines',
    '140': 'Poland',
    '141': 'Portugal',
    '142': 'Qatar',
    '143': 'Romania',
    '144': 'Russia',
    '145': 'Rwanda',
    '146': 'Saint Kitts and Nevis',
    '147': 'Saint Lucia',
    '148': 'Saint Vincent and the Grenadines',
    '149': 'Samoa',
    '150': 'San Marino',
    '151': 'Sao Tome and Principe',
    '152': 'Saudi Arabia',
    '153': 'Senegal',
    '154': 'Serbia',
    '155': 'Seychelles',
    '156': 'Sierra Leone',
    '157': 'Singapore',
    '158': 'Slovakia',
    '159': 'Slovenia',
    '160': 'Solomon Islands',
    '161': 'Somalia',
    '162': 'South Africa',
    '163': 'South Korea',
    '164': 'South Sudan',
    '165': 'Spain',
    '166': 'Sri Lanka',
    '167': 'Sudan',
    '168': 'Suriname',
    '169': 'Sweden',
    '170': 'Switzerland',
    '171': 'Syria',
    '172': 'Tajikistan',
    '173': 'Tanzania',
    '174': 'Thailand',
    '175': 'Timor-Leste',
    '176': 'Togo',
    '177': 'Tonga',
    '178': 'Trinidad and Tobago',
    '179': 'Tunisia',
    '180': 'Turkey',
    '181': 'Turkmenistan',
    '182': 'Tuvalu',
    '183': 'Uganda',
    '184': 'Ukraine',
    '185': 'United Arab Emirates',
    '186': 'United Kingdom',
    '187': 'United States of America',
    '188': 'Uruguay',
    '189': 'Uzbekistan',
    '190': 'Vanuatu',
    '191': 'Venezuela',
    '192': 'Vietnam',
    '193': 'Yemen',
    '194': 'Zambia',
    '195': 'Zimbabwe',
};
// Candidate Names
var candidates = {
    'Cara Leyton': 'Conservative',
    'Chris Wells': 'Labour',
    'Christian Bell': 'Lib-Dem',
    'Julie Greenwood': 'Green'
};
// Game Session Data
var gameData = {
    "party": "none",
    "pName": "none",
    "total votes": 0,
    "canvassed districts": 0,
    "popularity rating": 0,
    "campaign running": false,
};
// ---------------------------------------//Functions//---------
// -------------------------------------------------------------
// ######################################################
// State Controller monitoring (Available buttons etc)
function stateController() {
    // Call Pledge Priorotize Controlls Check
    // Check for double clik to move to top of Global Econnomy page
    $('table').dblclick(function () {
        window.location.href = "global-economics.html";
        return;
    });
    // Country Districts Page
    // Double tap to Reload Page.. I.e Navigate to top
    // // Refreshed
    $('.dpanel').dblclick(function () {
        window.location.href = "country-districts.html";
        return;
    });
    // Check for double-clik to move to top of District Page
    // $('div ,p .colorTable').dblclick(function () {
    //     window.location.href = "country-districts.html";
    // });
    // Check if to display "jump to Global Econmy" Button
    // After Party has been selected
    var picked = sessionStorage.getItem("myPolitician");
    if (picked === null) {
        $('#g-gen-button').removeClass('global-ecom-button-show');
        $('#g-gen-button').addClass('global-ecom-button-hide');
        return;
    }
    if (picked !== null) {
        $('#g-gen-button').addClass('global-ecom-button-show');
        $('#g-gen-button').removeClass('global-ecom-button-hide');
        changeRibbonColour();
        return;
    }
}
// Change Ribbon Color when Candidate Selected
// 
function changeRibbonColour() {
    $('.ribbon').removeClass('make-ribbon-red');
    $('.ribbon').removeClass('make-ribbon-blue');
    $('.ribbon').removeClass('make-ribbon-yellow');
    $('.ribbon').removeClass('make-ribbon-green');
    $('.ribbon').addClass('make-ribbon-grey');
    var picked = sessionStorage.getItem("myParty");
    switch (picked) {
        // make Labour
        case 'Labour':
            $('.ribbon').addClass('make-ribbon-red');
            $('.ribbon').removeClass('make-ribbon-blue');
            $('.ribbon').removeClass('make-ribbon-yellow');
            $('.ribbon').removeClass('make-ribbon-green');
            $('.ribbon').removeClass('make-ribbon-grey');
            // Reset Game
            resetGame();
            return;
            // Make Conservative
        case 'Conservative':
            $('.ribbon').removeClass('make-ribbon-red');
            $('.ribbon').addClass('make-ribbon-blue');
            $('.ribbon').removeClass('make-ribbon-yellow');
            $('.ribbon').removeClass('make-ribbon-green');
            $('.ribbon').removeClass('make-ribbon-grey');
            // Reset Game
            resetGame();
            return;
            // Make Lib Dem
        case 'Lib-Dem':
            $('.ribbon').removeClass('make-ribbon-red');
            $('.ribbon').removeClass('make-ribbon-blue');
            $('.ribbon').addClass('make-ribbon-yellow');
            $('.ribbon').removeClass('make-ribbon-green');
            $('.ribbon').removeClass('make-ribbon-grey');
            // Reset Game
            resetGame();
            return;
            // Make Green Party
        case 'Green':
            $('.ribbon').removeClass('make-ribbon-red');
            $('.ribbon').removeClass('make-ribbon-blue');
            $('.ribbon').removeClass('make-ribbon-yellow');
            $('.ribbon').addClass('make-ribbon-green');
            $('.ribbon').removeClass('make-ribbon-grey');
            // Reset Game
            resetGame();
            return;
    }
}
// Get & Save  Political candidate & Party Affiliation
$(document).ready(function () {
    $(".candidates").click(function () {
        // Save Politicians SELECTION
        var mypolitician = $(this).children('h1').text();
        $('#political-sway').html('<h1>' + candidates[mypolitician] + '</h1>')
        sessionStorage.setItem("myPolitician", mypolitician);
        // Save PARTY SELECTION
        var myParty = $('#political-sway').text();
        // $('#political-sway').html('<h1>' + candidates[mypolitician] + '</h1>')
        sessionStorage.setItem("myParty", myParty);
    })
});
// Flash Title!!
function flasher() {
    // alert(flashState);
    if (flashState === true) {
        flashState = false;
        $('.flashIt').addClass('flashNow');
        return;
    }
    if (flashState === false) {
        flashState = true;
        $('.flashIt').removeClass('flashNow');
        return
    }
}
// Flash HAND !!
function flashHand() {
    // alert(flashState);
    // sway = political sway .e party
    var sway = $('#political-sway h1').text();
    if (flashHandState === true) {
        flashHandState = false;
        $('.point-hand').addClass('flashHandNow');
        if (sway == "") {
            $('.c-name').addClass('flashHandNow');
        }
        return;
    }
    if (flashHandState === false) {
        flashHandState = true;
        $('.point-hand').removeClass('flashHandNow');
        if (sway == "") {
            $('.c-name').removeClass('flashHandNow');
        }
        return
    }
}
// Populate ECONOMY TABLE
function populateTable() {
    // Reset World Economy Stats
    // Also eliminate values of 0
    var worldEconomy = [];
    var num = 0;
    cCp++;
    do {
        var num = (Math.random() * gDPMax);
        cGdp = num.toFixed(roundDownDigit);
    } while (cGdp < 1);
    do {
        var num = (Math.random() * healthMax);
        cHealth = num.toFixed(roundDownDigit);
    } while (cHealth < 1);
    do {
        var num = (Math.random() * popMax);
        cPop = num.toFixed(roundDownDigit)
    } while (cPop < 1);
    // Create row of Country Data
    if (cCp < noOfCountriesMax) {
        $('#global-table').append("<tr  id=\"" + cCp + "\"><td>" + "<h3>" + countries[cCp] + "#" + "</td><td>" + cGdp + "," + "</td><td>" + cHealth + "," + "</td><td>" + cPop + "</td>" + "</h3>" + "</tr>");
    }
    var cstrng = countries[cCp] + "," + cGdp + "," + cHealth + "," + cPop;
    //  Store Info in Session Memory
    sessionStorage.setItem(cCp, cstrng);
    $('td').addClass('colorTable');
    // Grab Three Random Countries for weighting data in district generation
    if (threeCountriesSelected === false && cCp == noOfCountriesMax) {
        grabThreeCountries();
    }
}
// Grab Three Countries for use for Genation of Weighting on District Starts
// 
function grabThreeCountries() {
    // alert("boom");
    var randomCountry = (Math.random() * noOfCountriesMax);
    c1 = randomCountry.toFixed(0);
    var randomCountry = (Math.random() * noOfCountriesMax);
    c2 = randomCountry.toFixed(0);
    var randomCountry = (Math.random() * noOfCountriesMax);
    c3 = randomCountry.toFixed(0);
    // alert(c1+":"+c2+":"+c3);
    var countName1 = $('#' + c1.toString()).text();
    var countName2 = $('#' + c2.toString()).text();
    var countName3 = $('#' + c3.toString()).text();
    // Get Table entry to Highlight & Add c-name class, to flash in unison with flashing hand
    var first = c1.toString();
    var second = c2.toString();
    var third = c3.toString();
    if (cCp == noOfCountriesMax) {
        $("#" + first).children('td ,h3').first().addClass('highLight2');
        $("#" + second).children('td ,h3').first().addClass('highLight2');
        $("#" + third).children('td ,h3').first().addClass('highLight2');
    }
    // alert(countName1 + "/" + countName2 + "/" + countName3);
    sessionStorage.setItem("c1", countName1);
    sessionStorage.setItem("c2", countName2);
    sessionStorage.setItem("c3", countName3);
    // Acknowledge 3 Random coutries have been found. No need to repeat
    threeCountriesSelected = true;
}



// Assemble View District Information
// 
function viewDistricts() {
    // alert("View Districts");
    // List out District Number 
    var packedDistrictInfo = "";
    for (let districtNumber = 1; districtNumber < noOfDistricts; districtNumber++) {
        // Reset Variables to count up Issue Weighting
        var issueWeightingTotal = 0;
        var distHealth = 0;
        var distCrime = 0;
        var distWealth = 0;
        var distEmployment = 0;
        var distSatis = 0;
        // Get pack district data
        var dInfo = sessionStorage.getItem("D," + districtNumber);
        // Break it into two to separate Issues gfrom List of people
        var TP = [] = dInfo.split('@');
        //Flatten Array so we can split it again
        tpFlat = TP.join();
        // Split once again to access just the issues Questions/Issues only
        var QO = [] = tpFlat.split("#");
        // Flatten the Issues section so we can grab each issue
        issuesFlat = QO.join();
        // Now turn each Issue into an array , so we can access them by index
        var ISS = [] = issuesFlat.split(",");
        // Get each line of an Issue ready to push to html page
        var l1 = ISS[0];
        var l2 = ISS[1];
        var l3 = ISS[2];
        var l4 = ISS[3];
        var l5 = ISS[4];
        // Get each line  Solution
        var s1 = ISS[5];
        var s2 = ISS[6];
        var s3 = ISS[7];
        var s4 = ISS[8];
        var s5 = ISS[9];
        // Get 1st Character of Issue, to determin class of issue
        var aa = l1.slice(0, 2).trim();
        var bb = l2.slice(0, 2).trim();
        var cc = l3.slice(0, 2).trim();
        var dd = l4.slice(0, 2).trim();
        var ee = l5.slice(0, 2).trim();
        // Place Values of Issue Volumes in approproiate Variables
        distCrime = (countUpIssues("C", aa, bb, cc, dd, ee));
        distHealth = (countUpIssues("H", aa, bb, cc, dd, ee));
        distWealth = (countUpIssues("W", aa, bb, cc, dd, ee));
        distEmployment = (countUpIssues("E", aa, bb, cc, dd, ee));
        distSatis = (countUpIssues("S", aa, bb, cc, dd, ee));

        console.log(distCrime + ":" + distHealth + ":" + distWealth + ":" + distEmployment + ":" + distSatis + ":");










        // Assemble HTM DYNAMICALLY
        var outputDistrictHtml = "";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"row\">";
        outputDistrictHtml = outputDistrictHtml + "<div id=\"D:" + districtNumber + "\" class=\"col-12 keep-insideBSol dpanel\">";
        outputDistrictHtml = outputDistrictHtml + "<h3>";
        outputDistrictHtml = outputDistrictHtml + "<p class=\"highLight\">District: " + districtNumber + " :" + countryDistricts[districtNumber] + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l1 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l2 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l3 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l4 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l5 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p class=\"point-up\"><span class=\"far fa-hand-point-up \"></span>\ District Headline - Concerns </p>";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"anw\">";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions1\" class=\"answers\">" + s1 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions2\" class=\"answers\">" + s2 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions3\" class=\"answers\">" + s3 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions4\" class=\"answers\">" + s4 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions5\" class=\"answers\">" + s5 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "</div>";



        // Box DIV for graphics
        outputDistrictHtml = outputDistrictHtml + "<div class=\"row\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"col-6\">";

        // CRIME
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar bg-danger role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";

        // HEALTH
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar bg-primary role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";

        // WEALTH
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar bg-info role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";

        // EMPLOYMENT
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar bg-warning role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";

        // SATISFACTION
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar bg-success role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";

        // -------

        outputDistrictHtml = outputDistrictHtml + "</div\">";
        outputDistrictHtml = outputDistrictHtml + "</div\">";

        outputDistrictHtml = outputDistrictHtml + "<div id=\"graphic-stats-" + districtNumber + "\">";
        outputDistrictHtml = outputDistrictHtml + "<h3>";
        outputDistrictHtml = outputDistrictHtml + "</h3>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "<p></p>";
        outputDistrictHtml = outputDistrictHtml + "<a href=\"generate-populus.html\" class=\"btn btn-primary btn-lg active\" role=\"button\" aria-pressed=\"true\">Population</a>";
        outputDistrictHtml = outputDistrictHtml + "<a href=\"pledge-priority.html\" class=\"btn btn-success btn-lg active\" role=\"button\" aria-pressed=\"true\">Adjust Pledge-Priority</a>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "</h3>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        $("#district-list").append(outputDistrictHtml);
        // console.log(unpackedInfo);


        // Load Graphics
        // 




    }
}
// Count UP Issues
// i1-5 = question number 1st charcater, 
// Issue = character looking for..ie issue type 
function countUpIssues(issue, i1, i2, i3, i4, i5) {
    var issueTotal = 0;
    switch (i1) {
        case issue:
            issueTotal++;
    }
    switch (i2) {
        case issue:
            issueTotal++;
    }
    switch (i3) {
        case issue:
            issueTotal++;
    }
    switch (i4) {
        case issue:
            issueTotal++;
    }
    switch (i5) {
        case issue:
            issueTotal++;
    }
    // console.log(issueTotal);
    return issueTotal;
}



// Strip Trim Characters
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, ' ');
}




// ////////////////////////////////
// MAIN GAME ENGINE & LOGIC      //
// ////////////////////////////////
// Generate Districts  
// This Object will generate the districts
function getRandom(limit) {
    rn = (Math.floor(Math.random() * limit)) + 1;
    return rn;
}

function CreateDistricts() {
    // Create District & Population
    for (var i = 1; i < noOfDistricts; i++) {
        // create district ID
        dID = "D" + "," + i;
        // Create Random Problems & Solutions For Every Area
        // PROB1
        var rnum = getRandom(noOfProblems);
        var dpa = districtProblems[rnum];
        var spa = districtSolutions[rnum];
        // PROB2
        var rnum = getRandom(noOfProblems);
        var dpb = districtProblems[rnum];
        var spb = districtSolutions[rnum];
        // PROB3
        var rnum = getRandom(noOfProblems);
        var dpc = districtProblems[rnum];
        var spc = districtSolutions[rnum];
        // PROB4
        var rnum = getRandom(noOfProblems);
        var dpd = districtProblems[rnum];
        var spd = districtSolutions[rnum];
        // PROB5
        var rnum = getRandom(noOfProblems);
        var dpe = districtProblems[rnum];
        var spe = districtSolutions[rnum];
        // Create Problem and Solution as a Packed String
        var PRB = dpa + "," + dpb + "," + dpc + "," + dpd + "," + dpe;
        var SOL = spa + "," + spb + "," + spc + "," + spd + "," + spe;
        // Generate Population Count in District
        var dPop = ((Math.floor(Math.random() * noOfDistricts)) + 1) * 100;
        // Create people for District
        var people = "[";
        for (let i = 1; i < dPop; i++) {
            // Generate Initial Party Affiliation
            var partyAffiliantNumber = (Math.floor(Math.random() * 4)) + 1;
            var partyNames = {
                1: "Conservative",
                2: "Labour",
                3: "Lib-Dem",
                4: "Green",
            }
            var pAf = partyNames[partyAffiliantNumber];
            // Setup Name Pools
            var fNames = {
                // First Name Pool
                1: "Mark",
                2: "Paul",
                3: "Fred",
                5: "Ashwin",
                6: "Brian",
                7: "Barry",
                8: "Walter",
                9: "Matthew",
                10: "Carol",
                11: "Betty",
                12: "Marcus",
                13: "Duane",
                14: "Jack",
                15: "Patrick",
                16: "Seamus",
                17: "Michale",
                18: "Michelle",
                19: "Donald",
                20: "Gregg",
            }
            var initials = {
                // Initials Pool
                1: "A",
                2: "B",
                3: "C",
                4: "D",
                5: "E",
                6: "F",
                7: "G",
                8: "H",
                9: "I",
                10: "J",
                11: "K",
                12: "L",
                13: "M",
                14: "N",
                15: "O",
                16: "P",
                18: "Q",
                19: "R",
                20: "S",
            }
            var sNames = {
                // Surnames Pool
                1: "Martinez",
                2: "Flannagan",
                3: "Murray",
                4: "Childs",
                5: "Winterbourne",
                6: "PennyWise",
                7: "Harrison",
                8: "Ruben",
                9: "Sherman",
                10: "Davidson",
                11: "Mcarthy",
                12: "Macmanus",
                13: "White",
                14: "Beal",
                15: "Jameson",
                16: "Bell",
                17: "Green",
                18: "Cambridge",
                19: "Henry",
                20: "O'mally",
            }
            // Make Random Name Combination
            var fName = [fNames[getRandom(20)]];
            var initial = [initials[getRandom(20)]];;
            var surName = [sNames[getRandom(20)]];;
            var PersonName = fName + "." + initial + "." + surName;
            // Persons Main Concern
            var pConcern = getRandom(4);
            // TipOver amount of concerns politican sucessfully addreses
            // To swing my Vote
            var tiPOver = getRandom(5);
            people = people + "[" + i + "/" + pConcern + "/" + PersonName + "/" + tiPOver + "/" + pAf + "]";
        }
        // All Variables Ready for use
        var DI = dID;
        var PRB = PRB;
        var dPop = dPop;
        var pAf = pAf;
        // Packed - StringOut to Save to SessionVariable
        var LO = PRB + '#' + SOL + '#' + dPop + "#" + pAf + "#" + "@" + people;
        sessionStorage.setItem(DI, LO);
        // Tetspoint - can be deleted
        // console.log(DI + "/" + LO);
    }
}
// Set Flag to Reset The Game
// All Game data will be lost!!!!
// The Go Back to main Page
function clearGameData() {
    localStorage.setItem("newGame", 0);
    sessionStorage.clear("myParty");
    window.location.assign("index.html")
}
// This routine checks a flag to see if a request has been issued
// To reset the Game. If so it calls the  setupGame routine
// Then it resets the flag , so its not repeated again
// Untill requested
function resetGame(runProcess) {
    if (localStorage.getItem("newGame") === "1") {
        // Do not Reset again
        return;
    } else {
        // Main Code Here...
        setupGame();
        // Set Reset Flag To show Game has been Reset;
        localStorage.setItem("newGame", "1");
    }
}
// Main Setup Game Setup Routine
// This routine will set up basic structures
// Entry call - Index.html - Reset Game 
function setupGame() {
    // Create Districts
    // Wipe Away Old Pledges
    CreateDistricts();
    WipeOutOldDistrictPledges();
}
// }
// Wipe Out Old Dsitrict Pledges Made.
// Ready for new Game
// NOTE: ** Access with "sessionStorage.getItem(Dn:PS:sn(1-5)""
function WipeOutOldDistrictPledges() {
    for (let i = 1; i < noOfDistricts; i++) {
        sessionStorage.setItem(i + ":" + "PS:1", "-");
        sessionStorage.setItem(i + ":" + "PS:2", "-");
        sessionStorage.setItem(i + ":" + "PS:3", "-");
        sessionStorage.setItem(i + ":" + "PS:4", "-");
        sessionStorage.setItem(i + ":" + "PS:5", "-");
    }
    // alert("Previous Entries Erased!");
}
// Flash Unaddressed Issue in Country Districts
// Entry call = country-district.html
function flashUnaddressedIssue() {
    if (unAddressedIssueFlashState == true) {
        $('.far').addClass('un-addressed-issue-flasher');
        unAddressedIssueFlashState = false;
        return;
    }
    if (unAddressedIssueFlashState == false) {
        $('.far').removeClass('un-addressed-issue-flasher');
        unAddressedIssueFlashState = true;
        return;
    }
}