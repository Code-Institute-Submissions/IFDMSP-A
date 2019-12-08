// ------- DATA ----------- 
// This variable is just to allow dev testing. When true it 
// Shows the district solution answers.
// Priority Button Line & Value
var pblineValue = []; // Priority button line
var pbl = 0;
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
// No of pledges selected
var pcount = 0;
// Setup World data 
var worldEconomy = [];
var threeCountriesSelected = false;





// ------------------------------------------------ 
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





var District = {
    // Districts Object representation
    // d-populus ; How many people in district
    // d-name ; Name of district
    // d-number; district number
    // d-affluence; 0-100000000.00
    // d-employment ; number employed (max=dpopulus)
    // d-crimes; 0-100; 0 good / 100 bad
    // d-housing; Number in housing (0 > d-populus)
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





// ---------------------------------------//Functions//
// ####################################################
// ####################################################


function stateController() {

    // State Controller monitoring (Available buttons etc)
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





function changeRibbonColour() {
    // Change Ribbon Color when Candidate Selected
    // 
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



$(document).ready(function () {
    // Get & Save  Political candidate & Party Affiliation
    // 
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



function flasher() {

    // Flash Title!!
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



function flashHand() {
    // Flash HAND !!
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




function populateTable() {
    // Populate ECONOMY TABLE
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
        // SHow country count on the page
        $('#country-ticker').text(cCp + 1);
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





function grabThreeCountries() {
    // Grab Three Countries for use for Genation of Weighting on District Starts
    // 
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





function viewDistricts() {
    // Assemble View District Information
    // alert(sessionStorage.getItem("D,0"));
    // Error Check if Data is created or not.
    // If not bounce to index page and request user reset game!
    if (sessionStorage.getItem("D,1") === null) {
        alert("Corrupt data! Please reset the game!");
        location.href = "index.html";
    }
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
        // Get Total Sum Value
        issueWeightingTotal = (distCrime + distHealth + distWealth + distEmployment + distSatis);

        // console.log(distCrime + ":" + distHealth + ":" + distWealth + ":" + distEmployment + ":" + distSatis + ":" + "@" + issueWeightingTotal);

        // Assemble HTM DYNAMICALLY
        var outputDistrictHtml = "";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"row\">";
        outputDistrictHtml = outputDistrictHtml + "<div id=\"D:" + districtNumber + "\" class=\"col-12 keep-insideBSol dpanel\">";
        outputDistrictHtml = outputDistrictHtml + "<h3>";
        outputDistrictHtml = outputDistrictHtml + "<p class=\"highLight\">District: " + "<span class=\"highlight-district-number\"> " + districtNumber + "</span> : " + "<span class=\"hightlight-district-name\"> " + countryDistricts[districtNumber] + " </span></p>";
        // Tabloid Banner
        outputDistrictHtml = outputDistrictHtml + "<div class=\"tabloid\">";
        outputDistrictHtml = outputDistrictHtml + "<span class=\"far fa-newspaper\"></span>" + " NEWS FLASH!!! ";

        // <!-- Promoted Manifesto Pledges -->

        outputDistrictHtml = outputDistrictHtml + "<div class=\"row\">";
        outputDistrictHtml = outputDistrictHtml + "<div id=\"promoted-pledges\" class=\"col-12\">";
        outputDistrictHtml = outputDistrictHtml + "<p>";
        outputDistrictHtml = outputDistrictHtml + "";
        outputDistrictHtml = outputDistrictHtml + "MANIFESTO - PROMOTED :";

        var encloseFront = "<span class=\"promo-circle\">";
        var encloseEnd = "</span\">";

        outputDistrictHtml = outputDistrictHtml + encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",1") + "" + encloseEnd;

        outputDistrictHtml = outputDistrictHtml + encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",2") + "" + encloseEnd;
        outputDistrictHtml = outputDistrictHtml + encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",3") + "" + encloseEnd;
        outputDistrictHtml = outputDistrictHtml + encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",4") + "" + encloseEnd;
        outputDistrictHtml = outputDistrictHtml + encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",5") + "" + encloseEnd;
        outputDistrictHtml = outputDistrictHtml + encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",6") + "" + encloseEnd;
        outputDistrictHtml = outputDistrictHtml + encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",7") + "" + encloseEnd;


        outputDistrictHtml = outputDistrictHtml + "</p>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "</div>";

        // UK MAP IMAGE
        outputDistrictHtml = outputDistrictHtml + "<div class=\"row\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"col-12 map-uk\">";
        outputDistrictHtml = outputDistrictHtml + "<img src=\"images/map-uk.jpg\">";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "</div>";


        outputDistrictHtml = outputDistrictHtml + "<p>" + l1 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l2 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l3 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l4 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p>" + l5 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p class=\"point-up\"><span class=\"far fa-hand-point-up \"></span>\ Issues</p>";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"anw\">";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions1\" class=\"answers\">" + s1 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions2\" class=\"answers\">" + s2 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions3\" class=\"answers\">" + s3 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions4\" class=\"answers\">" + s4 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "<p id=\"solutions5\" class=\"answers\">" + s5 + "</p>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        // Box DIV for PROGRESS BARS
        outputDistrictHtml = outputDistrictHtml + "<div class=\"row\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"col-8\">";
        outputDistrictHtml = outputDistrictHtml + "<h3>";
        // CRIME
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar  progress-bar-striped progress-bar-animated bg-danger   role=\"progressbar\" style=\"width: " + ((distCrime * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distCrime * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distCrime * issueWeightingTotal) / 100) + "\">(C)RIME : " + (distCrime / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";
        // HEALTH
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar  progress-bar-striped progress-bar-animated bg-primary role=\"progressbar\" style=\"width: " + ((distHealth * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distHealth * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distHealth * issueWeightingTotal) / 100) + "\">(H)EALTH : " + (distHealth / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";
        // WEALTH
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info role=\"progressbar\" style=\"width: " + ((distWealth * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distWealth * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distWealth * issueWeightingTotal) / 100) + "\">(W)EALTH :" + (distWealth / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";
        // EMPLOYMENT
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning role=\"progressbar\" style=\"width: " + ((distEmployment * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distEmployment * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distEmployment * issueWeightingTotal) / 100) + "\">(E)MPLOYMENT :" + (distEmployment / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";
        // SATISFACTION
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress\">";
        outputDistrictHtml = outputDistrictHtml + "<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success role=\"progressbar\" style=\"width: " + ((distSatis * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distSatis * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distSatis * issueWeightingTotal) / 100) + "\">(S)ATISFACTION :" + (distSatis / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml = outputDistrictHtml + "</div>";
        // -------
        outputDistrictHtml = outputDistrictHtml + "</html>";
        outputDistrictHtml = outputDistrictHtml + "</div\">";
        outputDistrictHtml = outputDistrictHtml + "</div\">";
        outputDistrictHtml = outputDistrictHtml + "<div id=\"graphic-stats-" + districtNumber + "\">";
        outputDistrictHtml = outputDistrictHtml + "<h3>";
        outputDistrictHtml = outputDistrictHtml + "</h3>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "<p></p>";

        var dn = "<span id=\"" + districtNumber + "\"></span>";

        outputDistrictHtml = outputDistrictHtml + "<div id=\"" + districtNumber + "\" class=\"district-buttons-box\">";

        outputDistrictHtml = outputDistrictHtml + "<a href=\"#\" class=\"btn btn-warning btn-lg active keep-insideBSol w-100 general-buttons-fmt\"  onclick=\"viewPopulation()\"   role=\"button\" aria-pressed=\"true\">Populus</a>";
        outputDistrictHtml = outputDistrictHtml + "<a href=\"#\"  class=\"btn btn-success btn-lg active keep-insideBSol w-100 general-buttons-fmt\" onclick=\"saveCurrentDistrict()\"  role=\"button\" aria-pressed=\"true\"  id=" + districtNumber + " \>Pledges</a>"; /*@@@*/

        outputDistrictHtml = outputDistrictHtml + "</div>";

        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "</h3>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        outputDistrictHtml = outputDistrictHtml + "</div>";
        $("#district-list").append(outputDistrictHtml);

    }
}





function saveCurrentDistrict() {
    // Save Current district on Button Press
    // to go to "pledge prioroty page"
    $('div .district-buttons-box').click(function () {
        var result = $(this).closest('.district-buttons-box').attr("id");
        sessionStorage.setItem("CD", result);

    })
    window.location.href = "pledge-priority.html";
}




function createDistrictPriority() {
    // Create Distric Priority 
    // Save District Promoted Pledges From Pledge Priority
    // Buttons Values
    var cdn = sessionStorage.getItem("CD");

    sessionStorage.setItem("DMP," + cdn + ",1", sessionStorage.getItem("PBL1"));
    sessionStorage.setItem("DMP," + cdn + ",2", sessionStorage.getItem("PBL2"));
    sessionStorage.setItem("DMP," + cdn + ",3", sessionStorage.getItem("PBL3"));
    sessionStorage.setItem("DMP," + cdn + ",4", sessionStorage.getItem("PBL4"));
    sessionStorage.setItem("DMP," + cdn + ",5", sessionStorage.getItem("PBL5"));
    sessionStorage.setItem("DMP," + cdn + ",6", sessionStorage.getItem("PBL6"));
    sessionStorage.setItem("DMP," + cdn + ",7", sessionStorage.getItem("PBL7"));
    // 
    var cdn = countryDistricts[sessionStorage.getItem("CD")];
    alert("Your Pledges have now been \"PROMOTED\" to " + cdn + " District!")
    window.location.href = "country-districts.html";
}










function viewPopulation() {
    // Save Current District
    // View "Population" in district
    $('div .district-buttons-box').click(function () {
        var result = $(this).closest('.district-buttons-box').attr("id");
        sessionStorage.setItem("CD", result);

    })

    window.location.href = "generate-populus.html";
}





function showCurrentDistrict() {
    // Show current district number
    var cdn = sessionStorage.getItem("CD");
    $("#current-district ,p").text("District ~" + cdn + "~ " + countryDistricts[cdn]);
}






function countUpIssues(issue, i1, i2, i3, i4, i5) {
    // Count UP Issues
    // i1-5 = question number 1st charcater, 
    // Issue = character looking for..ie issue type 
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





function myTrim(x) {
    // Strip Trim Characters
    return x.replace(/^\s+|\s+$/gm, ' ');
}



// ////////////////////////////////
// MAIN GAME ENGINE & LOGIC      //
// ////////////////////////////////


function getRandom(limit) {
    // Create Random Number
    rn = (Math.floor(Math.random() * limit)) + 1;
    return rn;
}

function CreateDistricts() {
    // Generate Districts  
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





function clearGameData() {
    // Set Flag to Reset The Game
    // All Game data will be lost!!!!
    // The Go Back to main Page
    localStorage.setItem("newGame", 0);
    sessionStorage.clear("myParty");
    window.location.assign("index.html")
}




function resetGame(runProcess) {
    // This routine checks a flag to see if a request has been issued
    // To reset the Game. If so it calls the  setupGame routine
    // Then it resets the flag , so its not repeated again
    // Untill requested

    if (localStorage.getItem("newGame") === "1") {
        // Do not Reset again
        return;
    } else {
        // Main Code Here...
        setupGame();
        // Set Reset Flag To show Game has been Reset;
        localStorage.setItem("newGame", "1");
    }

    // Rest Pledge priority from pledge priority page to Low (L)
    // Including in all districts
    pblineValue[1] = "L";
    pblineValue[2] = "L";
    pblineValue[3] = "L";
    pblineValue[4] = "L";
    pblineValue[5] = "L";
    pblineValue[6] = "L";
    pblineValue[7] = "L";

    for (let i = 1; i < noOfDistricts; i++) {
        // reset array to low
        sessionStorage.setItem("PBL" + i, "L");
        // reset all district priority setting to Low
        sessionStorage.setItem("DMP," + i + ",1", "L");
        sessionStorage.setItem("DMP," + i + ",2", "L");
        sessionStorage.setItem("DMP," + i + ",3", "L");
        sessionStorage.setItem("DMP," + i + ",4", "L");
        sessionStorage.setItem("DMP," + i + ",5", "L");
        sessionStorage.setItem("DMP," + i + ",6", "L");
        sessionStorage.setItem("DMP," + i + ",7", "L");
    }
    // sessionStorage.setItem()
    // sessionStorage.setItem("PBL1", [pblineValue[1]]);
}











function setupGame() {
    // Main Setup Game Setup Routine
    // This routine will set up basic structures
    // Entry call - Index.html - Reset Game 

    // Create Districts
    // Wipe Away Old Pledges
    CreateDistricts();
    createEmptyManifesto();
    WipeOutOldDistrictPledges();
}









function WipeOutOldDistrictPledges() {
    // Wipe Out Old Dsitrict Pledges Made.
    // Ready for new Game
    // NOTE: ** Access with "sessionStorage.getItem(Dn:PS:sn(1-5)""
    for (let i = 1; i < noOfDistricts; i++) {
        sessionStorage.setItem(i + ":" + "PS:1", "-");
        sessionStorage.setItem(i + ":" + "PS:2", "-");
        sessionStorage.setItem(i + ":" + "PS:3", "-");
        sessionStorage.setItem(i + ":" + "PS:4", "-");
        sessionStorage.setItem(i + ":" + "PS:5", "-");
    }
    // alert("Previous Entries Erased!");
}





function flashUnaddressedIssue() {
    // Flash Unaddressed Issue in Country Districts
    // Entry call = country-district.html
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





function createEmptyManifesto() {
    // Create Empty Manifesto
    // This is the Manifest your Politician will use
    // In the game..
    // M,x -,-   ; where x=1-7 & - = manifesto, -=Priority value (L/M/H)
    if (sessionStorage.getItem("M,1") == "-") {
        return;
    }
    for (let i = 1; i < 8; i++) {
        var blankManifestoKey = "M," + i;
        var blankManifestoLine = "-";
        // Create it in memory
        sessionStorage.setItem(blankManifestoKey, blankManifestoLine);
    }
    alert("Blank Manifesto Created!");
}





function resetManifesto() {
    // Reset Manifesto
    createEmptyManifesto();
    window.location = "create-manifesto.html";
}




// Loadup Manifesto Page
function loadUpManifestoPage() {
    for (let i = 1; i < noOfProblems + 1; i++) {
        $('#raw-pledge-pool').append("<div id=\"raw-pledge-item-" + i + "\"><h4><p class=\"keep-insideBSol \">" + "<span class=\"raw-pledge-index\">" + i + "</span>" + districtSolutions[i] + "<p></h4></div>");
    }
    // Load Up -Manifesto
    for (let i = 1; i < 8; i++) {
        $('#raw-manifesto-pool').append("<div class=\"raw-manifesto-item-" + i + "\"><h4><p class=\"keep-insideBSol pledge-plank\">" + i + ": " + sessionStorage.getItem("M," + [i]) + "<p></h4></div>");
    }
    // Add Save Button
    $('#raw-manifesto-pool').append("<button type=\"button\"  onclick='saveManifesto()' class=\"btn btn-success  w-100 manifesto-save-button general-buttons-fmt\">Save</button>");
    // Clear Selections
    $('p').removeClass('selected-from-pledge-pool');
}




// Save Current Manifesto
function saveManifesto() {
    for (let i = 1; i < 8; i++) {
        // Ensure there are 7 pledges within manifesto
        if (sessionStorage.getItem("M," + i) === "-") {
            alert("You require -7- pledges for your Manifesto ")
            return;
        }
    }
    //  Save Manifesto list to "sessionStorage"
    for (let i = 1; i < 8; i++) {
        var blankManifestoKey = "M," + i;

        // Create session it in sessionStoragememory
        blankManifestoLine = $('.raw-manifesto-item-' + i + ' h4 p').first('p').text();
        sessionStorage.setItem(blankManifestoKey, blankManifestoLine);
    }
    // Confirm Save and jumpt to Districts Screen
    alert("Manifesto Saved!");
    window.location = "country-districts.html";
}



// Hightlight  Pledges in raw pledge pool
$(document).ready(function () {
    $("#raw-pledge-pool p").click(function () {
        // Tranfer selected pledges to Manifesto on 7 pledges
        // Selected
        if (pcount === 7) {
            window.location.href = "create-manifesto.html";
        }

        // Reset <anifesto if too many picked
        if (pcount === 7) {
            createEmptyManifesto();
            window.location = "create-manifesto.html";
        }

        // Highlight Selected raw Pledge & Increase Pledge Count
        $(this).first().addClass("selected-from-pledge-pool");
        pcount++;
        // 
        var content = $(this).text()
        $('.raw-manifesto-item-' + pcount + ' h4 p').first('p').text(content);
        sessionStorage.setItem("M," + pcount, content);
        $(this).hide("slow");
    });
});



// Deselect All Pledges
function deselectAllPledges() {
    $('p').removeClass('selected-from-pledge-pool');
    return;
}





function setBv(bp) {
    // SET  BUTTON VALUES
    // Iterate through Priority Button Rows & Find what priory was pushed
    // Set sessionStorage Accordingly
    // Check Line Values

    switch (pbl) {
        // Check P buttons Line 1
        case 1:
            if (bp == 1) {
                pblineValue[1] = "L";
                sessionStorage.setItem("PBL1", [pblineValue[1]]);
                $("#button-array-1").hide("slow");
                $("#manifesto-pledge-1").hide("slow");
                break;
            }
            if (bp == 2) {
                pblineValue[1] = "M";
                sessionStorage.setItem("PBL1", [pblineValue[1]]);
                $("#button-array-1").hide("slow");
                $("#manifesto-pledge-1").hide("slow");
                break;
            }
            if (bp == 3) {
                pblineValue[1] = "H";
                sessionStorage.setItem("PBL1", [pblineValue[1]]);
                $("#button-array-1").hide("slow");
                $("#manifesto-pledge-1").hide("slow");
                break;
            }
            break;
            // Check P Buttons L2
        case 2:
            if (bp == 1) {
                pblineValue[2] = "L";
                sessionStorage.setItem("PBL2", [pblineValue[2]]);
                $("#button-array-2").hide("slow");
                $("#manifesto-pledge-2").hide("slow");
                break;
            }
            if (bp == 2) {
                pblineValue[2] = "M";
                sessionStorage.setItem("PBL2", [pblineValue[2]]);
                $("#button-array-2").hide("slow");
                $("#manifesto-pledge-2").hide("slow");
                break;
            }
            if (bp == 3) {
                pblineValue[2] = "H";
                sessionStorage.setItem("PBL2", [pblineValue[2]]);
                $("#button-array-2").hide("slow");
                $("#manifesto-pledge-2").hide("slow");
                break;
            }
            break;
            // Check P Buttons L3
        case 3:
            if (bp == 1) {
                pblineValue[3] = "L";
                sessionStorage.setItem("PBL3", [pblineValue[3]]);
                $("#button-array-3").hide("slow");
                $("#manifesto-pledge-3").hide("slow");
                break;
            }
            if (bp == 2) {
                pblineValue[3] = "M";
                sessionStorage.setItem("PBL3", [pblineValue[3]]);
                $("#button-array-3").hide("slow");
                $("#manifesto-pledge-3").hide("slow");
                break;
            }
            if (bp == 3) {
                pblineValue[3] = "H";
                sessionStorage.setItem("PBL3", [pblineValue[3]]);
                $("#button-array-3").hide("slow");
                $("#manifesto-pledge-3").hide("slow");
                break;
            }
            break;
        case 4:
            if (bp == 1) {
                pblineValue[4] = "L";
                sessionStorage.setItem("PBL4", [pblineValue[4]]);
                $("#button-array-4").hide("slow");
                $("#manifesto-pledge-4").hide("slow");
                break;
            }
            if (bp == 2) {
                pblineValue[4] = "M";
                sessionStorage.setItem("PBL4", [pblineValue[4]]);
                $("#button-array-4").hide("slow");
                $("#manifesto-pledge-4").hide("slow");
                break;
            }
            if (bp == 3) {
                pblineValue[4] = "H";
                sessionStorage.setItem("PBL4", [pblineValue[4]]);
                $("#button-array-4").hide("slow");
                $("#manifesto-pledge-4").hide("slow");
                break;
            }
            break;
        case 5:
            if (bp == 1) {
                pblineValue[5] = "L";
                sessionStorage.setItem("PBL5", [pblineValue[5]]);
                $("#button-array-5").hide("slow");
                $("#manifesto-pledge-5").hide("slow");
                break;
            }
            if (bp == 2) {
                pblineValue[5] = "M";
                sessionStorage.setItem("PBL5", [pblineValue[5]]);
                $("#button-array-5").hide("slow");
                $("#manifesto-pledge-5").hide("slow");
                break;
            }
            if (bp == 3) {
                pblineValue[5] = "H";
                sessionStorage.setItem("PBL5", [pblineValue[5]]);
                $("#button-array-5").hide("slow");
                $("#manifesto-pledge-5").hide("slow");
                break;
            }
            break;
        case 6:
            if (bp == 1) {
                pblineValue[6] = "L";
                sessionStorage.setItem("PBL6", [pblineValue[6]]);
                $("#button-array-6").hide("slow");
                $("#manifesto-pledge-6").hide("slow");
                break;
            }
            if (bp == 2) {
                pblineValue[6] = "M";
                sessionStorage.setItem("PBL6", [pblineValue[6]]);
                $("#button-array-6").hide("slow");
                $("#manifesto-pledge-6").hide("slow");
                break;
            }
            if (bp == 3) {
                pblineValue[6] = "H";
                sessionStorage.setItem("PBL6", [pblineValue[6]]);
                $("#button-array-6").hide("slow");
                $("#manifesto-pledge-6").hide("slow");
                break;
            }
            break;
        case 7:
            if (bp == 1) {
                pblineValue[7] = "L";
                sessionStorage.setItem("PBL7", [pblineValue[7]]);
                $("#button-array-7").hide("slow");
                $("#manifesto-pledge-7").hide("slow");
                break;
            }
            if (bp == 2) {
                pblineValue[7] = "M";
                sessionStorage.setItem("PBL7", [pblineValue[7]]);
                $("#button-array-7").hide("slow");
                $("#manifesto-pledge-7").hide("slow");
                break;
            }
            if (bp == 3) {
                pblineValue[7] = "H";
                sessionStorage.setItem("PBL7", [pblineValue[7]]);
                $("#button-array-7").hide("slow");
                $("#manifesto-pledge-7").hide("slow");
                break;
            }
            break;
    }
}



// PLEDGEPRIORITY PAGE
function loadUpPledgePriorityPage() {
    {
        var pbuttons = "";
        pbuttons = pbuttons + "<div class=\"row\">";
        pbuttons = pbuttons + "<div class=\"col-12 priority-buttons-format\">";
        // 
        pbuttons = pbuttons + "<div class=\"row=\">"
        pbuttons = pbuttons + "<div class=\"col-12\">";
        pbuttons = pbuttons + "<button type=\"button\" onclick=\"setBv(1)\" class=\"btn btn-primary btn-sm\">L</button>";
        pbuttons = pbuttons + "<button type=\"button\" onclick=\"setBv(2)\" class=\"btn btn-warning btn-sm\">M</button>";
        pbuttons = pbuttons + "<button type=\"button\" onclick=\"setBv(3)\" class=\"btn btn-info btn-sm\">H</button>";
        pbuttons = pbuttons + "</div>";
        pbuttons = pbuttons + "</div>";
        // 
        pbuttons = pbuttons + "</div>";
        pbuttons = pbuttons + "</div>";
        // Build buttons on page right-hand side
        // Add the pledge line
        for (let i = 1; i < 8; i++) {

            var pdetailHlt = "<span class=\"highlight-district-number\">" + i + "</span>";
            $('#manifesto-pledges').append('<div id="manifesto-pledge-' + i + '\" class=\"mfi"><h2>' + pdetailHlt + sessionStorage.getItem('M,' + i) + '</h2></div>');

            var PriorityButtonNumberHlt = "<span class=\"highlight-district-number\">" + i + "</span>";
            $('#pledge-priority').append('<div id="button-array-' + i + '\"><h2>' + PriorityButtonNumberHlt + ":" + pbuttons + '</h2></div>');
        }
    }




    $(document).ready(function () {
        // Manifesto Pledge Priotorization
        // Get Selcted Manifesto Pledge

        $('#manifesto-pledge-item ,.mfi').click(function () {
            removeButtonArrayHighlight();
            var result = $(this).attr('id');
            // alert(result);
            switch (result) {
                case 'manifesto-pledge-1':
                    $('#button-array-1 button').addClass('highlight-pbutt');
                    pbl = 1; // Button Array Line 1
                    break;
                case 'manifesto-pledge-2':
                    $('#button-array-2  button').addClass('highlight-pbutt');
                    pbl = 2; // Button Array Line 2
                    break;
                case 'manifesto-pledge-3':
                    $('#button-array-3  button').addClass('highlight-pbutt');
                    pbl = 3; // Button Array Line 3
                    break;
                case 'manifesto-pledge-4':
                    $('#button-array-4  button').addClass('highlight-pbutt');
                    pbl = 4; // Button Array Line 4
                    break;
                case 'manifesto-pledge-5':
                    $('#button-array-5  button').addClass('highlight-pbutt');
                    pbl = 5; // Button Array Line 5
                    break;
                case 'manifesto-pledge-6':
                    $('#button-array-6  button').addClass('highlight-pbutt');
                    pbl = 6; // Button Array Line 6
                    break;
                case 'manifesto-pledge-7':
                    $('#button-array-7  button').addClass('highlight-pbutt');
                    pbl = 7; // Button Array Line 7
                    break;
            }
        })
    })


    // Remove Highlight from the button array on
    // View Pledge Priority Page
    function removeButtonArrayHighlight() {
        $('#button-array-1 button').removeClass('highlight-pbutt');
        $('#button-array-2 button').removeClass('highlight-pbutt');
        $('#button-array-3 button').removeClass('highlight-pbutt');
        $('#button-array-4 button').removeClass('highlight-pbutt');
        $('#button-array-5 button').removeClass('highlight-pbutt');
        $('#button-array-6 button').removeClass('highlight-pbutt');
        $('#button-array-7 button').removeClass('highlight-pbutt');
    }
}




function backToDistrictView() {
    // Go back to View Districts Page
    window.location.href = "country-districts.html";

}