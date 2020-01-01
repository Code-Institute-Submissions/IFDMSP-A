// ------- DATA ----------- 
var sHelpMaximum = 3;
var controlNumb = 1;
var updatedPeoplePackedList = []; // new updated people array post election engine modificationb
updatedPeoplePackedList.push("-"); // fill element zero with blank
var electionEngineUnpackedPerson;
//  reductionValue = 0; // amount to remove from persons conversion value .. to nulifiy to 0.
var personConversionValueMax = 5; // persons conversion value max.
var conservativeDistrictHoldTotal = 0;
var labourDistrictHoldTotal = 0;
var libDemDistrictHoldTotal = 0;
var greenDistrictHoldTotal = 0;
var numberOfPriorityHighAvilable = 2; // Number of times allowed to select High on priority page
var pblineValue = []; // Priority button line
var pbl = 0;
var testingMode = false;
var unAddressedIssueFlashState = true; // used for flashing hand pointing on districts view
var cDO = [];
var flashState = true; // flash states
var flashHandState = true;
var globeShake = true;
var cCp = 0;
var noOfCountriesMax = 195; // Number of countries to pool through to get 3 significant trading partners 
var noOfDistricts = 26; // Number of districts in pool to canvass in game &&&#
var noOfProblems = 20; // Number of problems in pool to choose from
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
// Marque Variables
var messagePosition = 1; //Message data
var mw = 10; //Message Width
var partyGT = {
    // GRAND TOTAL RESULTS FOR PARTIES
    "Conservative": 0,
    "Labour": 0,
    "LibDem": 0,
    "Green": 0,
}
// ------------------------------------------------ 
var manifesto = {
    // ///////////////////////////
    // Your Politicians Manifesto
    "1": "Provide More Funding For Hospitals",
    "2": "Free Car Parks at Hospitals",
    "3": "Business Rates Reduction by 5%",
    "4": "More Apprenticeships & Government Support for Business",
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
    1: "    H   *   LONG QUEUES IN A&E",
    2: "    H   *   PRESCRIPTION COSTS HIGH!",
    3: "    H   *   MAJOR FLU-OUTBREAK",
    4: "    H   *   MEDICAL - TECH DECREPIT!",
    5: "    H   *   DOCTORS STRESSED!",
    6: "    C   *   STREET CRIME INCREASED!",
    7: "    C   *   STREET ROBBERY INFLUX",
    8: "    C   *   NARCOTICS USE RISING",
    9: "    C   *   VIOLENT ASSAULTS RISING!",
    10: "    C   *   GANGS IN PUBLIC SPACES",
    11: "    C   *   ANTI-SOCIAL BEHAVIOR RISE",
    12: "    W   *   COST OF LIVING SPIRALLING",
    13: "    E   *   UN-EMPLOYMENT RISING",
    14: "    E   *   TEEN UN-EMPLOYMENT RISE",
    15: "    E   *   UNEMPLOYMENT SPT INEFFECTIVE!",
    16: "    W   *   POOR LIVING WAGES",
    17: "    H   *   RISE IN DEPRESSION",
    18: "    S   *   SOCIAL UNREST RISING",
    19: "    C   *   TERRORISM ON THE RISE",
    20: "    W   *   RISING FUEL COSTS",
    21: "    E   *   CHILD CARE COST TOO HIGH!",
};
var districtSolutions = {
    // Solutions		
    1: "    H   *   £100-MILLION HEALTH SERVICE INVESTMENT",
    2: "    H   *   50% PRESCRIPTION DISCOUNT FOR ALL",
    3: "    H   *   100K FLU-VACCINES TO BE BOUGHT",
    4: "    H   *   MAJOR INVESTMENT IN TECH-SUPPORT & STAFF",
    5: "    H   *   RECRUIT  40000 DOCTORS & HEALTH CARE  STAFF IN 2YRS",
    6: "    C   *   RECRUIT 20'000 PCO's NEXT 2YRS",
    7: "    C   *   HARSHER SENTENCES FOR STREET CRIME",
    8: "    C   *   INTENSIFY STOP & SEARCH DISTRICT-WIDE",
    9: "    C   *   INCREASE PHYSICAL POLICE PRESENCE ON STREET",
    10: "    C   *   INCREASE USE OF ASBO's IN DISTRICT",
    11: "    C   *   LIMIT OF ALCOHOL SALES TO PEOPLE WITHOUT ID",
    12: "    W   *   PERSONAL ALLOWANCE INCREASE 3.5% ABOVE INFLATION ",
    13: "    E   *   LOW BUSINESS RATE MORATORIUM FOR FOR 3YRS",
    14: "    E   *   FINANCIAL BENEFITS FOR BUSINESSES OFFERING APPRENTICESHIPS",
    15: "    E   *   RAISE OF UNEMPLOYMENT BENEFIT £2.70 PER WK",
    16: "    W   *   MARRIED-COUPLE ALLOWANCE TO RISE BY £750 PER YEAR",
    17: "    H   *   INVESTMENT OF £30-MILLION IN MENTAL HEALTH SERVICES",
    18: "    S   *   FINANCIAL INCENTIVES FOR COMPANIES INVESTING IN STAFF TRAINING",
    19: "    C   *   INCREASE IN ARMED POLICE RESPONSE",
    20: "    W   *   TRANSPORT FARE-FREEZE FOR 5 YEARS",
    21: "    E   *   CHILD SUPPORT  & CARE SUBSIDY INCREASE",
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



// -------------- -//Functions//
// ####################################################

// Menu Items List
function setUpMenus() {
    var menuItems = ['Instructions', 'Start', 'Economy', 'Districts', 'Residents', 'Manifesto', "Campaign"];
    var menuLinks = ['instructions.html', 'index.html', 'global-economics.html', 'country-districts.html', 'generate-populus.html', 'create-manifesto.html', 'campaign.html'];
    var menuFontAwesome = ['<span class="fas fa-book-open">', '<span class="fas fa-sync-alt"></span>', '<span class="fas fa-globe"></span>', '<span class="fas fa-map"></span>', '<span class="fas fa-users"></span>', '<span class="fas fa-scroll">', '<span class="fas fa-running"></span>']
    // place in session memory

    // }

    for (let x = 0; x < menuItems.length; x++) {
        // <button type="button" class="btn btn-primary">Primary</button>
        // var outHtmlString = "<li><a href=\"" + menuLinks[x] + "\">" + menuFontAwesome[x] + menuItems[x] + "</a></li>"; // ?@

        var outHtmlString = "<li><button type=\"button\" class=\"btn btn-primary\"><a href=\"" + menuLinks[x] + "\">" + menuFontAwesome[x] + menuItems[x] + "</a></button></li>"; // ?@
        $("#burger-menu-items").append(outHtmlString);
        $("#standard-menu-items").append(outHtmlString);
    }
}



function stateController() {
    // State Controller monitoring (Available buttons etc)
    // Check for double-click to move to top of Global Economy page
    $('table').dblclick(function () {
        window.location.href = "global-economics.html";
        return;
    });
    // Country Districts Page Double tap to Reload Page.. I.e Navigate to top Refreshed
    $('.dpanel').dblclick(function () {
        window.location.href = "country-districts.html";
        return;
    });
    // Check if to display "jump to Global Economy" Button After Party has been selected
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
        sessionStorage.setItem("myParty", myParty);
    })
});

function flasher() {
    // Flash Title!!
    if (flashState === true) {
        flashState === false;
        $('.flashIt').addClass('flashNow');
        return;
    }
    if (flashState === false) {
        flashState === true;
        $('.flashIt').removeClass('flashNow');
        return
    }
}

function flashHand() {
    // Flash HAND !! .....sway = political sway i.e party
    var sway = $('#political-sway h1').text();
    if (flashHandState === true) {
        flashHandState = false;
        $('.point-hand').addClass('flashHandNow');
        if (sway === "") {
            $('.c-name').addClass('flashHandNow');
        }
        return;
    }
    if (flashHandState === false) {
        flashHandState = true;
        $('.point-hand').removeClass('flashHandNow');
        if (sway === "") {
            $('.c-name').removeClass('flashHandNow');
        }
        return
    }
}

function populateTable() {
    // //////////////////////////////////////////
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
        // Show country count on the page
        $('#country-ticker').text(cCp + 1);
    }
    var cstrng = countries[cCp] + "," + cGdp + "," + cHealth + "," + cPop;
    //  Store Info in Session Memory
    try {
        sessionStorage.setItem(cCp, cstrng);
        $('td').addClass('colorTable');
    } catch {
        return;
    }
    // Grab Three Random Countries for weighting data in district generation
    if (threeCountriesSelected === false && cCp == noOfCountriesMax) {
        grabThreeCountries();
        controlNumb = (sessionStorage.getItem("c1").length + sessionStorage.getItem("c2").length) * sessionStorage.getItem("c3").length;
        // console.log("+:" + controlNumb);
    }
}

function grabThreeCountries() {
    // Grab Three Countries for use for Generation of Weighting on District Starts
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
    sessionStorage.setItem("c1", countName1);
    sessionStorage.setItem("c2", countName2);
    sessionStorage.setItem("c3", countName3);
    // Acknowledge 3 Random countries have been found. No need to repeat
    threeCountriesSelected = true;
}

function viewDistricts() {
    // Assemble View District Information
    // alert(sessionStorage.getItem("D,0"));
    // Error Check if Data is created or not.
    // If not bounce to index page and request user reset game!
    if (sessionStorage.getItem("D,1") === null) {
        alert("Corrupt data! This can be caused by simultaneous session conflict. Ensure only one session is active. Please reset the game!");
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
        // Break it into two to separate Issues from List of people
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
        var aa = l1.slice(0, 5).trim();
        var bb = l2.slice(0, 5).trim();
        var cc = l3.slice(0, 5).trim();
        var dd = l4.slice(0, 5).trim();
        var ee = l5.slice(0, 5).trim();
        // Place Values of Issue Volumes in appropriate Variables
        distCrime = (countUpIssues("C", aa, bb, cc, dd, ee));
        distHealth = (countUpIssues("H", aa, bb, cc, dd, ee));
        distWealth = (countUpIssues("W", aa, bb, cc, dd, ee));
        distEmployment = (countUpIssues("E", aa, bb, cc, dd, ee));
        distSatis = (countUpIssues("S", aa, bb, cc, dd, ee));
        // Get Total Sum Value
        issueWeightingTotal = (distCrime + distHealth + distWealth + distEmployment + distSatis);
        // Assemble HTM DYNAMICALLY
        var outputDistrictHtml = "";
        outputDistrictHtml += "<div  id=\"" + districtNumber + "\">* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</div>"; // Jump back to page point tag; #BUGTEST?
        outputDistrictHtml += "<div class=\"row\">";
        outputDistrictHtml += "<div id=\"D:" + districtNumber + "\" class=\"col-12 keep-insideBSol dpanel\">";
        outputDistrictHtml += "<h3>";
        outputDistrictHtml += "<p class=\"highLight\">District: " + "<span class=\"highlight-district-number\"> " + districtNumber + "</span> : " + "<span class=\"hightlight-district-name\"> " + countryDistricts[districtNumber] + " </span></p>";
        // HIGHLIGHT DISTRICTS THAT HAVE HAD PLEDGES PRIORITIZED!!
        var dp1 = sessionStorage.getItem("DMP," + districtNumber + ",1");
        var dp2 = sessionStorage.getItem("DMP," + districtNumber + ",2");
        var dp3 = sessionStorage.getItem("DMP," + districtNumber + ",3");
        var dp4 = sessionStorage.getItem("DMP," + districtNumber + ",4");
        var dp5 = sessionStorage.getItem("DMP," + districtNumber + ",5");
        var dp6 = sessionStorage.getItem("DMP," + districtNumber + ",6");
        var dp7 = sessionStorage.getItem("DMP," + districtNumber + ",7");
        var dChanged = checkDistrictPledgeChanged(dp1, dp2, dp3, dp4, dp5, dp6, dp7); //*BUGCHECK
        var hState = "";
        if (dChanged === 1) {
            hState = "pledgeMade";
        }
        // Tabloid Banner
        outputDistrictHtml += "<div class=\"tabloid " + hState + "\">";
        outputDistrictHtml += "<span class=\"fas fa-newspaper\"></span>" + " NEWS FLASH!!";
        // <!-- Promoted Manifesto Pledges -->
        outputDistrictHtml += "<div class=\"row\">";
        outputDistrictHtml += "<div id=\"promoted-pledges\" class=\"col-12\">";
        outputDistrictHtml += "<p>";
        outputDistrictHtml += "";
        outputDistrictHtml += "MANIFESTO - PROMOTED PRIORITY :";
        var encloseFront = "<span class=\"promo-circle\">";
        var encloseEnd = "</span\">";
        outputDistrictHtml += encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",1") + "<span class=\"plno\">=P1</span>" + encloseEnd;
        outputDistrictHtml += encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",2") + "<span class=\"plno\">=P2</span>" + encloseEnd;
        outputDistrictHtml += encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",3") + "<span class=\"plno\">=P3</span>" + encloseEnd;
        outputDistrictHtml += encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",4") + "<span class=\"plno\">=P4</span>" + encloseEnd;
        outputDistrictHtml += encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",5") + "<span class=\"plno\">=P5</span>" + encloseEnd;
        outputDistrictHtml += encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",6") + "<span class=\"plno\">=P6</span>" + encloseEnd;
        outputDistrictHtml += encloseFront + sessionStorage.getItem("DMP," + districtNumber + ",7") + "<span class=\"plno\">=P7</span>" + encloseEnd;
        outputDistrictHtml += "</p>";
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "</div>";
        // 
        // UK MAP IMAGE
        outputDistrictHtml += "<div class=\"row\">";
        outputDistrictHtml += "<div class=\"col-12 map-uk\">";
        outputDistrictHtml += "<img src=\"images/map-uk.jpg\">";
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "<p>" + l1 + "</p>";
        outputDistrictHtml += "<p>" + l2 + "</p>";
        outputDistrictHtml += "<p>" + l3 + "</p>";
        outputDistrictHtml += "<p>" + l4 + "</p>";
        outputDistrictHtml += "<p>" + l5 + "</p>";
        outputDistrictHtml += "<p class=\"point-up\"><span class=\"fas fa-hand-point-up \"></span>\ Canvass Rept</p>";
        outputDistrictHtml += "<div class=\"anw\">";
        outputDistrictHtml += "<p id=\"solutions1\" class=\"answers\">" + s1 + "</p>";
        outputDistrictHtml += "<p id=\"solutions2\" class=\"answers\">" + s2 + "</p>";
        outputDistrictHtml += "<p id=\"solutions3\" class=\"answers\">" + s3 + "</p>";
        outputDistrictHtml += "<p id=\"solutions4\" class=\"answers\">" + s4 + "</p>";
        outputDistrictHtml += "<p id=\"solutions5\" class=\"answers\">" + s5 + "</p>";
        outputDistrictHtml += "</div>";
        // Box DIV for PROGRESS BARS
        outputDistrictHtml += "<div class=\"row\">";
        outputDistrictHtml += "<div class=\"col-11\">";
        outputDistrictHtml += "<h3>";
        // CRIME
        outputDistrictHtml += "<div class=\"progress\">";
        outputDistrictHtml += "<div class=\"progress-bar  progress-bar-striped progress-bar-animated bg-danger   role=\"progressbar\" style=\"width: " + ((distCrime * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distCrime * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distCrime * issueWeightingTotal) / 100) + "\">(C)RIME : " + (distCrime / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml += "</div>";
        // HEALTH
        outputDistrictHtml += "<div class=\"progress\">";
        outputDistrictHtml += "<div class=\"progress-bar  progress-bar-striped progress-bar-animated bg-primary role=\"progressbar\" style=\"width: " + ((distHealth * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distHealth * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distHealth * issueWeightingTotal) / 100) + "\">(H)EALTH : " + (distHealth / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml += "</div>";
        // WEALTH
        outputDistrictHtml += "<div class=\"progress\">";
        outputDistrictHtml += "<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info role=\"progressbar\" style=\"width: " + ((distWealth * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distWealth * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distWealth * issueWeightingTotal) / 100) + "\">(W)EALTH :" + (distWealth / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml += "</div>";
        // EMPLOYMENT
        outputDistrictHtml += "<div class=\"progress\">";
        outputDistrictHtml += "<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning role=\"progressbar\" style=\"width: " + ((distEmployment * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distEmployment * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distEmployment * issueWeightingTotal) / 100) + "\">(E)MPLOYMENT :" + (distEmployment / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml += "</div>";
        // SATISFACTION
        outputDistrictHtml += "<div class=\"progress\">";
        outputDistrictHtml += "<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success role=\"progressbar\" style=\"width: " + ((distSatis * 100) / issueWeightingTotal) + "%\" aria-valuenow=\"" + ((distSatis * issueWeightingTotal) / 100) + "\" aria-valuemin=\"0\" aria-valuemax=\"" + ((distSatis * issueWeightingTotal) / 100) + "\">(S)ATISFACTION :" + (distSatis / issueWeightingTotal) * 100 + "%</div>"
        outputDistrictHtml += "</div>";
        // -------
        outputDistrictHtml += "</html>";
        outputDistrictHtml += "</div\">";
        outputDistrictHtml += "</div\">";
        outputDistrictHtml += "<div id=\"graphic-stats-" + districtNumber + "\">";
        outputDistrictHtml += "<h3>";
        outputDistrictHtml += "</h3>";
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "<p></p>";
        var dn = "<span id=\"" + districtNumber + "\"></span>";
        outputDistrictHtml += "<div id=\"" + districtNumber + "\" class=\"district-buttons-box\">";
        outputDistrictHtml += "<a href=\"#\" class=\"btn btn-warning btn-lg active keep-insideBSol w-100 general-buttons-fmt\"  onclick=\"viewPop()\"   role=\"button\" aria-pressed=\"true\">Residents</a>";
        outputDistrictHtml += "<a href=\"#\"  class=\"btn btn-success btn-lg active keep-insideBSol w-100 general-buttons-fmt\" onclick=\"saveCurrentDistrict()\"  role=\"button\" aria-pressed=\"true\"  id=" + districtNumber + " \>Pledges</a>"; /*@@@*/
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "</h3>";
        outputDistrictHtml += "</div>";
        outputDistrictHtml += "</div>";
        $("#district-list").append(outputDistrictHtml);
    }
}

function saveCurrentDistrict() {
    // Save Current district on Button Press to go to "pledge priority page"
    $('div .district-buttons-box').click(function () {
        var result = $(this).closest('.district-buttons-box').attr("id");
        sessionStorage.setItem("CD", result);
    })
    window.location.href = "pledge-priority.html"; // Got PLedge
}

function clearPledgePriorityButtonValuesDefault() {
    // Reset the Pledge Priorities to Default Value in sessionStorage Memory
    sessionStorage.setItem("PBL1", "L");
    sessionStorage.setItem("PBL2", "L");
    sessionStorage.setItem("PBL3", "L");
    sessionStorage.setItem("PBL4", "L");
    sessionStorage.setItem("PBL5", "L");
    sessionStorage.setItem("PBL6", "L");
    sessionStorage.setItem("PBL7", "L");
}

function createDistrictPriority() {
    // Create District Priority & RESET ALL TO LOW PRIORITY AS DEFAULT
    var cdn = sessionStorage.getItem("CD");
    sessionStorage.setItem("DMP," + cdn + ",1", "L");
    sessionStorage.setItem("DMP," + cdn + ",2", "L");
    sessionStorage.setItem("DMP," + cdn + ",3", "L");
    sessionStorage.setItem("DMP," + cdn + ",4", "L");
    sessionStorage.setItem("DMP," + cdn + ",5", "L");
    sessionStorage.setItem("DMP," + cdn + ",6", "L");
    sessionStorage.setItem("DMP," + cdn + ",7", "L");
    // Save District Promoted Pledges From Pledge Priority Buttons Values
    var cdn = sessionStorage.getItem("CD");
    sessionStorage.setItem("DMP," + cdn + ",1", sessionStorage.getItem("PBL1"));
    sessionStorage.setItem("DMP," + cdn + ",2", sessionStorage.getItem("PBL2"));
    sessionStorage.setItem("DMP," + cdn + ",3", sessionStorage.getItem("PBL3"));
    sessionStorage.setItem("DMP," + cdn + ",4", sessionStorage.getItem("PBL4"));
    sessionStorage.setItem("DMP," + cdn + ",5", sessionStorage.getItem("PBL5"));
    sessionStorage.setItem("DMP," + cdn + ",6", sessionStorage.getItem("PBL6"));
    sessionStorage.setItem("DMP," + cdn + ",7", sessionStorage.getItem("PBL7"));
    var cdn = countryDistricts[sessionStorage.getItem("CD")];
    alert("Your Pledges have now been \"PROMOTED\" to " + cdn + " District!");
    window.location.href = "country-districts.html#" + sessionStorage.getItem("CD"); // Reload Page
}

function viewPop() {
    $('div .district-buttons-box').click(function () {
        var result = $(this).closest('.district-buttons-box').attr("id");
        sessionStorage.setItem("CD", result);
    })
    window.location.href = "generate-populus.html";
}

function loadUpPopulation() {
    // POPULATION TABLE 
    if (sessionStorage.getItem("sHelp") < 1) {
        // Remove Statistician Help Button If Help Not Available
        $('#statistician-help-button').hide();
    }
    var cd = sessionStorage.getItem("CD");
    var tableLineout = "";
    var currentDistrict = sessionStorage.getItem("CD");
    var districtChunck = [] = sessionStorage.getItem("D," + currentDistrict);
    const pinfoStart = peopleArray = districtChunck.indexOf('@');
    const dataEnd = peopleArray = districtChunck.indexOf('~');
    var popData = districtChunck.slice(pinfoStart, dataEnd);
    var peopleList = "";
    peopleList = popData.split('^');
    // LAYOUT TITLES
    var peopleOutputLine = "";
    peopleOutputLine += "<div class=\"row no-gutters\">";
    peopleOutputLine += "";
    // 
    peopleOutputLine += "<div class=\"col-2  keep-insideBSol nopadding people-list-format\">";
    peopleOutputLine += "<h2>";
    peopleOutputLine += "ROLL:";
    peopleOutputLine += "</h2>";
    peopleOutputLine += "</div>";
    // 
    peopleOutputLine += "<div class=\"col-1  keep-insideBSol nopadding people-list-format\">";
    peopleOutputLine += "<h2>";
    peopleOutputLine += "MI:";
    peopleOutputLine += "</h2>";
    peopleOutputLine += "</div>";
    // 
    peopleOutputLine += "<div class=\"col-4  keep-insideBSol nopadding people-list-format\">";
    peopleOutputLine += "<h2>";
    peopleOutputLine += "NAME:";
    peopleOutputLine += "</h2>";
    peopleOutputLine += "</div>";
    // 
    peopleOutputLine += "<div class=\"col-1  keep-insideBSol nopadding people-list-format\">";
    peopleOutputLine += "<h2>";
    peopleOutputLine += "CV";
    peopleOutputLine += "</h2>";
    peopleOutputLine += "</div>";
    // 
    peopleOutputLine += "<div class=\"col-4  keep-insideBSol nopadding people-list-format\">";
    peopleOutputLine += "<h2>";
    peopleOutputLine += "SUPPORTS";
    peopleOutputLine += "</h2>";
    peopleOutputLine += "</div>";
    peopleOutputLine += "</div>";
    $("#populus-table").append(peopleOutputLine);
    // ====//
    // CREATE LIST OF RESIDENTS 
    // Update Accuracy Count of Issues!!
    updateCanvassReportAccuracy(1, "X"); // Reset All ISsue Count Values
    for (let u = 1; u < peopleList.length; u++) {
        var PA = [];
        PA = (peopleList[u].split("/"))
        var peopleOutputLine = "";
        peopleOutputLine += "<div class=\"people-list-format\">";
        // Person Index
        peopleOutputLine += "<div id=" + u + "  class=\"row no-gutters\">";
        // Persons Concern
        peopleOutputLine += "";
        peopleOutputLine += "<div class=\"col-2  keep-insideBSol nopadding\">";
        peopleOutputLine += "<h2>";
        peopleOutputLine += PA[0];
        peopleOutputLine += "</h2>";
        peopleOutputLine += "</div>";
        peopleOutputLine += "";
        peopleOutputLine += "<div class=\"col-1  keep-insideBSol nopadding\">";
        peopleOutputLine += "<h2>";
        peopleOutputLine += PA[1];
        updateCanvassReportAccuracy(0, PA[1]); // Increase Count of Issue....
        peopleOutputLine += "</h2>";
        peopleOutputLine += "</div>";
        // Person Swing
        peopleOutputLine += "";
        peopleOutputLine += "<div class=\"col-4  keep-insideBSol nopadding\">";
        peopleOutputLine += "<h2>";
        peopleOutputLine += PA[2];
        peopleOutputLine += "</h2>";
        peopleOutputLine += "</div>";
        //  Person Name
        peopleOutputLine += "";
        peopleOutputLine += "<div class=\"col-1  keep-insideBSol nopadding\">";
        peopleOutputLine += "<h2>";
        peopleOutputLine += PA[3];
        peopleOutputLine += "</h2>";
        peopleOutputLine += "</div>";
        // Party Affiliation
        peopleOutputLine += "";
        peopleOutputLine += "<div class=\"col-4  keep-insideBSol nopadding\">";
        // Change Color to reflect party affiliation
        if (PA[4] === "Labour") {
            peopleOutputLine += "<h2 class=\"make-people-red\">";
        }
        if (PA[4] === "Conservative") {
            peopleOutputLine += "<h2 class=\"make-people-blue\">";
        }
        if (PA[4] === "Lib-Dem") {
            peopleOutputLine += "<h2 class=\"make-people-yellow\">";
        }
        if (PA[4] === "Green") {
            peopleOutputLine += "<h2 class=\"make-people-green\">";
        }
        peopleOutputLine += PA[4];
        peopleOutputLine += "</h2>";
        peopleOutputLine += "</div>";
        peopleOutputLine += "</div>";
        peopleOutputLine += "</div>";
        //  console.log(PA[1]);
        $("#populus-table").append(peopleOutputLine);
        // Save to session Memory Current People data Pre-Election TO BE USED IN ELECTION ENGINE*******
        var pdat = PA[0] + "," + PA[1] + "," + PA[2] + "," + PA[3] + "," + PA[4];
        sessionStorage.setItem("PED," + sessionStorage.getItem("CD") + "," + u + ":", pdat + "~");
    }
}

function showCurrentDistrict() {
    // Show current district number
    // Inside Pledge Priority page
    var cdn = sessionStorage.getItem("CD");
    $("#current-district ,p").text("District ~" + cdn + "~ " + countryDistricts[cdn]);
}

function countUpIssues(issue, i1, i2, i3, i4, i5) {
    // Count UP Issues... i1-5 = question number 1st character, 
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
    return issueTotal;
}
// STRIP ILLEGAL CHAR NOT WANTED
function myTrim(x) {
    // Strip Trim Characters
    return x.replace(/^\s+|\s+$/gm, ' ');
}
// ////////////////////////////////
// MAIN GAME ENGINE FUNCTIONS & LOGIC
// ////////////////////////////////
function getRandom(limit) {
    // Create Random Number up to limit
    do {
        rn = (Math.floor(Math.random() * limit)) + 1;
    } while (rn === 0 || isNaN(rn))
    return rn;
}

function CreateDistricts() {
    // Generate Districts  
    // Create District & Population
    for (var i = 1; i < noOfDistricts; i++) {
        // create district ID... initial pre-election
        dID = "D" + "," + i;
        // create district ID... for action
        eID = "E" + "," + i;
        // create district ID... for results
        rID = "R" + "," + i;
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
                21: "Paul",
                22: "Jessica",
                23: "Patricia",
                24: "Corey",
                25: "Maxine",
                26: "Margaret",
                27: "Elliot",
                28: "Francis",
                29: "Steven",
                30: "Stuart",
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
                21: "T",
            }
            var sNames = {
                // Surnames Pool
                1: "Martinez",
                2: "Flanagan",
                3: "Murray",
                4: "Childs",
                5: "Winterbourne",
                6: "PennyWise",
                7: "Harrison",
                8: "Ruben",
                9: "Sherman",
                10: "Davidson",
                11: "Mc'Carthy",
                12: "Macmanus",
                13: "White",
                14: "Beale",
                15: "Jameson",
                16: "Bell",
                17: "Green",
                18: "Cambridge",
                19: "Henry",
                20: "O'Mally",
                21: "Ellison",
                22: "Dupont",
                23: "Moore",
                24: "Bell",
                25: "Sommers",
                26: "Knight",
                27: "Austin",
                28: "Bridges",
                29: "Bourne",
                30: "Otis",
            }
            // Generate Random Name Combination for a person
            // Not 1 less to ensure no illegal item
            var fName = [fNames[getRandom(29)]];
            var initial = [initials[getRandom(20)]];
            var surName = [sNames[getRandom(29)]];
            var PersonName = fName + "." + initial + "." + surName;
            // Persons Main Concern  
            var pConcernString = "";
            var pConcernRN = getRandom(5);
            pConcern = globalTrendImpact(pConcernRN); // Get global influence &*&
            switch (pConcern) {
                case 0:
                    pConcernString = "-";
                    break;
                case 1:
                    pConcernString = "C";
                    break;
                case 2:
                    pConcernString = "W";
                    break;
                case 3:
                    pConcernString = "H";
                    break;
                case 4:
                    pConcernString = "E";
                    break;
                case 5:
                    pConcernString = "S";
                    break;
            }
            // TipOver amount of concerns politician successfully address
            // To swing my Vote. Iie PERSON CONVERSION THRESHOLD!!
            // PERSONS CV!
            var tiPOver = getRandom(personConversionValueMax);
            people = people + "^" + i + "/" + pConcernString + "/" + PersonName + "/" + tiPOver + "/" + pAf + "";
        }
        // MARK END OF PEOPLE DATA CHUNK WITH "~"
        people = people + "~";
        // All Variables Ready for use
        // REPLICATED DATA IN 3 AREAS  ... PRE / ACTION / POST   ELECTION
        var DI = dID;
        var EI = eID;
        // The line of content of each district
        var PRB = PRB;
        var dPop = dPop;
        var pAf = pAf;
        // Packed - StringOut to Save to SessionVariable
        var LO = PRB + '#' + SOL + '#' + dPop + "#" + pAf + "#" + "@" + people;
        sessionStorage.setItem(DI, LO); //PRE-ELECTION DATA
        sessionStorage.setItem(EI, LO); //CHANGES ELECTION DATA  ** MAKE CHANGES HERE
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
    // Until requested
    if (localStorage.getItem("newGame") === "1") {
        // Do not Reset again
        return;
    } else {
        // Main Code Here...
        setupGame();
        // Set Reset Flag To show Game has been Reset;
        localStorage.setItem("newGame", "1");
    }
    // RESET ALL YOUR PLEDGES TO LOW(L) BY DEFAULT
    pblineValue[1] = "L";
    pblineValue[2] = "L";
    pblineValue[3] = "L";
    pblineValue[4] = "L";
    pblineValue[5] = "L";
    pblineValue[6] = "L";
    pblineValue[7] = "L";
    for (let i = 1; i < noOfDistricts; i++) {
        // RESET ALL DISTRICT PLEDGES TO LOW AT START
        sessionStorage.setItem("PBL" + i, "L"); // Variable Key
        // Variable Value
        sessionStorage.setItem("DMP," + i + ",1", "L");
        sessionStorage.setItem("DMP," + i + ",2", "L");
        sessionStorage.setItem("DMP," + i + ",3", "L");
        sessionStorage.setItem("DMP," + i + ",4", "L");
        sessionStorage.setItem("DMP," + i + ",5", "L");
        sessionStorage.setItem("DMP," + i + ",6", "L");
        sessionStorage.setItem("DMP," + i + ",7", "L");
    }
}

function setupGame() {
    // Main Setup Game Setup Routine
    // This routine will set up basic structures
    // Entry call - Index.html - Reset Game 
    // Create Districts
    // Wipe Away Old Pledges
    sessionStorage.setItem("sHelp", sHelpMaximum); // Reset Stats Help
    CreateDistricts();
    createEmptyManifesto();
    WipeOutOldDistrictPledges();
    // SETUP GAME SESSION VARIABLES AT START
    // ###########################################
    sessionStorage.setItem("global-economy-page-authorised", true);
    sessionStorage.setItem("view-populus-page-authorised", true);
    sessionStorage.setItem("pledge-priority-page-authorised", true);
    sessionStorage.setItem("generate-populus-page-authorised", true);
    sessionStorage.setItem("country-districts-page-authorised", true);
    sessionStorage.setItem("create-manifesto-page-authorised", true);
    sessionStorage.setItem("election-day-active-authorised", false);
    sessionStorage.setItem("campaign-mode-active-authorised", true);
    sessionStorage.setItem("election-day-game-active-authorised", true);
}

function WipeOutOldDistrictPledges() {
    // Wipe Out Old Dsitrict Pledges Made, Ready for new Game
    // NOTE: ** Access with "sessionStorage.getItem(Dn:PS:sn(1-5)""
    for (let i = 1; i < noOfDistricts; i++) {
        sessionStorage.setItem(i + ":" + "PS:1", "-");
        sessionStorage.setItem(i + ":" + "PS:2", "-");
        sessionStorage.setItem(i + ":" + "PS:3", "-");
        sessionStorage.setItem(i + ":" + "PS:4", "-");
        sessionStorage.setItem(i + ":" + "PS:5", "-");
    }
    alert("Previous pledge entries erased!");
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
    $('#raw-manifesto-pool').append("<button type=\"button\"  onclick='saveManifesto()' class=\"btn btn-success   manifesto-save-button general-buttons-fmt\">Save</button>");
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
    // Turn OFF Allow Creation Now as Creation is allowed only once per Election
    sessionStorage.setItem("create-manifesto-page-authorised", false);
    window.location = "country-districts.html";
}
$(document).ready(function () {
    // Hightlight  Pledges in raw pledge pool
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

function deselectAllPledges() {
    // Deselect All Pledges
    $('p').removeClass('selected-from-pledge-pool');
    return;
}

function setBv(bp) {
    // SET  BUTTON VALUES
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
            if (bp == 3 && numberOfPriorityHighAvilable > 0) {
                pblineValue[1] = "H";
                sessionStorage.setItem("PBL1", [pblineValue[1]]);
                $("#button-array-1").hide("slow");
                $("#manifesto-pledge-1").hide("slow");
                // Decrement remaining High Pledges available count
                if (numberOfPriorityHighAvilable > 0) {
                    numberOfPriorityHighAvilable--;
                    showHighPledgesRemaining();
                }
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
            if (bp == 3 && numberOfPriorityHighAvilable > 0) {
                pblineValue[2] = "H";
                sessionStorage.setItem("PBL2", [pblineValue[2]]);
                $("#button-array-2").hide("slow");
                $("#manifesto-pledge-2").hide("slow");
                // Decrement remaining High Pledges available count
                if (numberOfPriorityHighAvilable > 0) {
                    numberOfPriorityHighAvilable--;
                    showHighPledgesRemaining();
                }
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
            if (bp == 3 && numberOfPriorityHighAvilable > 0) {
                pblineValue[3] = "H";
                sessionStorage.setItem("PBL3", [pblineValue[3]]);
                $("#button-array-3").hide("slow");
                $("#manifesto-pledge-3").hide("slow");
                // Decrement remaining High Pledges available count
                if (numberOfPriorityHighAvilable > 0) {
                    numberOfPriorityHighAvilable--;
                    showHighPledgesRemaining();
                }
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
            if (bp == 3 && numberOfPriorityHighAvilable > 0) {
                pblineValue[4] = "H";
                sessionStorage.setItem("PBL4", [pblineValue[4]]);
                $("#button-array-4").hide("slow");
                $("#manifesto-pledge-4").hide("slow");
                // Decrement remaining High Pledges available count
                if (numberOfPriorityHighAvilable > 0) {
                    numberOfPriorityHighAvilable--;
                    showHighPledgesRemaining();
                }
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
            if (bp == 3 && numberOfPriorityHighAvilable > 0) {
                pblineValue[5] = "H";
                sessionStorage.setItem("PBL5", [pblineValue[5]]);
                $("#button-array-5").hide("slow");
                $("#manifesto-pledge-5").hide("slow");
                // Decrement remaining High Pledges available count
                if (numberOfPriorityHighAvilable > 0) {
                    numberOfPriorityHighAvilable--;
                    showHighPledgesRemaining();
                }
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
            if (bp == 3 && numberOfPriorityHighAvilable > 0) {
                pblineValue[6] = "H";
                sessionStorage.setItem("PBL6", [pblineValue[6]]);
                $("#button-array-6").hide("slow");
                $("#manifesto-pledge-6").hide("slow");
                // Decrement remaining High Pledges available count
                if (numberOfPriorityHighAvilable > 0) {
                    numberOfPriorityHighAvilable--;
                    showHighPledgesRemaining();
                }
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
            if (bp == 3 && numberOfPriorityHighAvilable > 0) {
                pblineValue[7] = "H";
                sessionStorage.setItem("PBL7", [pblineValue[7]]);
                $("#button-array-7").hide("slow");
                $("#manifesto-pledge-7").hide("slow");
                // Decrement remaining High Pledges available count
                if (numberOfPriorityHighAvilable > 0) {
                    numberOfPriorityHighAvilable--;
                    showHighPledgesRemaining();
                }
                break;
            }
            break;
    }
}

function showHighPledgesRemaining() {
    // Show amount of High Pledges Available
    $('#nohp').text(numberOfPriorityHighAvilable);
}

function loadUpPledgePriorityPage() {
    // PLEDGEPRIORITY PAGE
    {
        var pbuttons = "";
        pbuttons += "<div class=\"row\">";
        pbuttons += "<div class=\"col-12 priority-buttons-format\">";
        // 
        pbuttons += "<div class=\"row=\">"
        pbuttons += "<div class=\"col-12\">";
        pbuttons += "<button type=\"button\" onclick=\"setBv(1)\" class=\"btn btn-primary btn-sm\">L</button>";
        pbuttons += "<button type=\"button\" onclick=\"setBv(2)\" class=\"btn btn-warning btn-sm\">M</button>";
        pbuttons += "<button type=\"button\" onclick=\"setBv(3)\" class=\"btn btn-info btn-sm\">H</button>";
        pbuttons += "</div>";
        pbuttons += "</div>";
        // 
        pbuttons += "</div>";
        pbuttons += "</div>";
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
            var result = $(this).attr('id'); // get pledge ID clicked
            // alert(result);
            // Show number of "High" Pledges remaining
            showHighPledgesRemaining();
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

    function removeButtonArrayHighlight() {
        // Remove Highlight from the button array on
        // View Pledge Priority Page
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
    var dtag = sessionStorage.getItem("CD");
    dtag = dtag.trim();
    window.location.assign("country-districts.html#" + dtag); // Jump to district view! BUGTEST
}
var marquee = {
    "message1": " **** Welcome to BBC-London. Today we are on the edge of our seats as we await the results of the general election. Indeed what party will succeed in producing a new prime-minster for the United Kingdom ***"
}
// Message Ticker Marquee
function showMarquee(message, mw) {
    messageOut = message.slice(messagePosition, (messagePosition + 100))
    // embedd message section in html page
    $('#marquee h2').text(messageOut);
    // advance position of ticker message
    if (messagePosition < (marquee.message1.length) - mw) {
        messagePosition++;
        if (messagePosition > (marquee.message1.length) - (mw + 1)) {
            messagePosition = 1;
        }
    }
}
//  //////////////////////////////////////////////////////////////////////////
// PRE - ELECTION ENGINE (1)
// //////////////////////////////////////////////////////////////////////////
function processElection() {
    // repd = district to report on
    // con = conservative info
    // lab = labour info
    // libd = liberal Democrats info
    // grn = green info
    // hld = stronghold party
    function publishLine(repd, con, lab, libd, grn, hld) {
        // Get Vote Supports per party in each district
        var ConVotes = getPartyMembersCountInDistrict(repd, "Conservative");
        var LabVotes = getPartyMembersCountInDistrict(repd, "Labour");
        var LibDemVotes = getPartyMembersCountInDistrict(repd, "Lib-Dem");
        var GreenVotes = getPartyMembersCountInDistrict(repd, "Green");
        // Running Total Votes Accross ALL Dristricts
        partyGT.Conservative = partyGT.Conservative + ConVotes;
        partyGT.Labour = partyGT.Labour + LabVotes;
        partyGT.LibDem = partyGT.LibDem + LibDemVotes;
        partyGT.Green = partyGT.Green + GreenVotes;
        // function getTopRankParty(party1, pval, party2, pval2, party3, pval3, party4, pval4) 
        // Get The top party in district
        var topParty;
        var topParty = getTopRankParty("Conservative", ConVotes, "Labour", LabVotes, "Lib-Dem", LibDemVotes, "Green", GreenVotes);
        // Build Output HTML in String
        var preStatsResultLineOut = "";
        preStatsResultLineOut += "<div class=\"row no-gutters\">";
        preStatsResultLineOut += " <div id=\"results-stats\" class=\"col-12\">";
        preStatsResultLineOut += "<h2>";
        preStatsResultLineOut += " <!-- // -->";
        preStatsResultLineOut += "<div class=\"row no-gutters\">";
        preStatsResultLineOut += "<div class=\"col-2 keep-insideBSol nopadding\">";
        preStatsResultLineOut += "<h2>";
        preStatsResultLineOut += repd;
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        // District Name
        preStatsResultLineOut += "<!-- // -->";
        preStatsResultLineOut += "<div class=\"col-4 keep-insideBSol nopadding\">";
        preStatsResultLineOut += "<h2>";
        preStatsResultLineOut += countryDistricts[repd];
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        // CON info
        preStatsResultLineOut += "<div class=\"col-2 keep-insideBSol nopadding\">";
        preStatsResultLineOut += "<h2>";
        preStatsResultLineOut += ConVotes;
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        // LAB Info
        preStatsResultLineOut += "<div class=\"col-1 keep-insideBSol nopadding\">";
        preStatsResultLineOut += "<h2>";
        preStatsResultLineOut += LabVotes;
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        // LIB-DEM
        preStatsResultLineOut += "<div class=\"col-1 keep-insideBSol nopadding\">";
        preStatsResultLineOut += "<h2>";
        preStatsResultLineOut += LibDemVotes;
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        // GREEN
        preStatsResultLineOut += "<div class=\"col-1 keep-insideBSol nopadding\">";
        preStatsResultLineOut += "<h2>";
        preStatsResultLineOut += GreenVotes;
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        // STRONGHOLD
        preStatsResultLineOut += "<div class=\col-1 keep-insideBSol nopadding\">";
        // ***************
        // Get Stronghold Colour
        strngHoldColor = getStrongHoldColor(topParty[0]);
        preStatsResultLineOut += "<h2 class=\"" + strngHoldColor + "\">";
        preStatsResultLineOut += topParty[0].slice(0, 3); // publish stronghold party in District
        // Record District Hold Count for Each Party
        DistrictTotalControl(topParty[0]);
        // **************
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        preStatsResultLineOut += "<div id=\"insert-stats\"></div>";
        preStatsResultLineOut += "</div>";
        // preStatsResultLineOut = preStatsResultLineOut + "<!-- // -->";
        preStatsResultLineOut += "</h2>";
        preStatsResultLineOut += "</div>";
        preStatsResultLineOut += "</div>";
        // Publish line item to webpage
        $('#insert-stats-content').append(preStatsResultLineOut);
        // SPIT OUT PARTY WITH THE MOST DISTRICT CONTROL
        $('reporter-domparty-img').html("<h1><img src=\"images/vicky-morse.png\" /></h1>");
        var tdcon = (conservativeDistrictHoldTotal / (conservativeDistrictHoldTotal + labourDistrictHoldTotal + libDemDistrictHoldTotal + greenDistrictHoldTotal)) * 100;
        var domminatPartymessage = "";
        domminatPartymessage += "<h2>The last party with a winning majority was </h2>";
        domminatPartymessage += "";
    }

    function getStrongHoldColor(tp) {
        // GET STRONG HOLD COLOUR
        // tp = stronghold  party name
        var strngHoldColor = "make-people-grey"; //make Default color Grey.. No clear Winner
        if (tp === "Conservative") {
            var strngHoldColor = "make-people-blue";
        }
        if (tp === "Labour") {
            var strngHoldColor = "make-people-red";
        }
        if (tp === "Lib-Dem") {
            var strngHoldColor = "make-people-yellow";
        }
        if (tp === "Green") {
            var strngHoldColor = "make-people-green";
        }
        return strngHoldColor;
    }

    function getTopRankParty(party1Name, pval1, party2Name, pval2, party3Name, pval3, party4Name, pval4) {
        // GET TOP RANK PARTY
        // Check through Parties supplied and find which is top in
        // Set submitted
        // This will allow you to find top party in district
        var topPartyValue = 0;
        var topPartyName = "";
        if (pval1 > topPartyValue) {
            topPartyValue = pval1;
            topPartyName = party1Name;
        }
        if (pval2 > topPartyValue) {
            topPartyValue = pval2;
            topPartyName = party2Name;
        }
        if (pval3 > topPartyValue) {
            topPartyValue = pval3;
            topPartyName = party3Name;
        }
        if (pval4 > topPartyValue) {
            topPartyValue = pval4;
            topPartyName = party4Name;
        }
        return [topPartyName, topPartyValue];
    }

    function getWinningParty(party1Name, pval1, party2Name, pval2, party3Name, pval3, party4Name, pval4) {
        // GET WINNING RPARTY
        // Check through Parties supplied and find which is top in
        // Set submitted
        // This will allow you to find top party in district
        var winPartyValue = 0;
        var winPartyName = "";
        var hungMessage = "** HUNG PARLIMENT! **"
        if (pval1 > winPartyValue) {
            winPartyValue = pval1;
            winPartyName = party1Name;
        }
        if (pval2 > winPartyValue) {
            winPartyValue = pval2;
            winPartyName = party2Name;
        }
        if (pval3 > winPartyValue) {
            winPartyValue = pval3;
            winPartyName = party3Name;
        }
        if (pval4 > winPartyValue) {
            winPartyValue = pval4;
            winPartyName = party4Name;
        }
        // 
        if (winPartyName === party1Name) {
            switch (winPartyValue) {
                case pval2:
                    winPartyName = hungMessage;
                    break;
                case pval3:
                    winPartyName = hungMessage;
                    break;
                case pval4:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        if (winPartyName === party2Name) {
            switch (winPartyValue) {
                case pval1:
                    winPartyName = hungMessage;
                    break;
                case pval3:
                    winPartyName = hungMessage;
                    break;
                case pval4:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        if (winPartyName === party3Name) {
            switch (winPartyValue) {
                case pval1:
                    winPartyName = hungMessage;
                    break;
                case pval2:
                    winPartyName = hungMessage;
                    break;
                case pval4:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        if (winPartyName === party4Name) {
            switch (winPartyValue) {
                case pval1:
                    winPartyName = hungMessage;
                    break;
                case pval2:
                    winPartyName = hungMessage;
                    break;
                case pval3:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        return [winPartyName, winPartyValue];
    }

    function getPartyMembersCountInDistrict(dn, party) {
        // ////////////////////////////////// 
        // GET SUBTOTAL MEMBERS COUNT OF EACH PARTY
        // dn = district number to check
        // party = party to check totals for..
        var packedData
        packedData = sessionStorage.getItem("D," + dn);
        var splitData = packedData.split("@");
        var members = splitData[1];
        var individualPeople = members.split("^");
        var tally = 0; // restet tally count
        for (let i = 1; i < individualPeople.length; i++) {
            var unpackedPerson = individualPeople[i].split("/");
            // ** Keep this as remider of each data content **
            // console.log(unpackedPerson[0]); // id number
            // console.log(unpackedPerson[1]); // issue of concern
            // console.log(unpackedPerson[2]); // name
            // console.log(unpackedPerson[3]); // convertion threshold
            // console.log(unpackedPerson[4]); // current party allaiance
            // count up tally
            switch (party) {
                case unpackedPerson[4]:
                    tally++;
                    break;
            }
        }
        return tally; // return total  found
    }

    function DistrictTotalControl(pty) {
        // Get Overall District Control
        if (pty === "Conservative") {
            // Add another district to Conservatives
            conservativeDistrictHoldTotal++;
            return;
        }
        if (pty === "Labour") {
            // Add another district to Conservatives
            labourDistrictHoldTotal++;
            return;
        }
        if (pty === "Lib-Dem") {
            // Add another district to Conservatives
            libDemDistrictHoldTotal++;
            return;
        }
        if (pty === "Green") {
            // Add another district to Conservatives
            greenDistrictHoldTotal++;
            return;
        }
    }
    // WORKOUT SUPPORT VOTES FOR EACH DISTRICT
    // Reset Grand Total Votes
    // Before Election Count Up
    partyGT.Conservative = 0;
    partyGT.Labour = 0;
    partyGT.LibDem = 0;
    partyGT.Green = 0;
    var reportingDistrict = 1;
    do {
        // publishLine(reportingDistrict, conSubtotal, labourSubtotal, libDemSubtotal, greenSubtotal, strongHold);
        publishLine(reportingDistrict, 0, 0, 0, 0, 0);
        reportingDistrict++;
    } while (reportingDistrict < noOfDistricts);
    $('#reporter-domparty-img').append("<img src=\"images/vicky-morse.png\"/>");
    $('#last-winning-party').append("<p>The Conservative party secured a majority of " + "<span class=\"circle-dtot\" >" + conservativeDistrictHoldTotal + "</span> districts at the last election.</p>");
    $('#last-winning-party').append("<p>The Labour party secured a majority of " + "<span class=\"circle-dtot\" >" + labourDistrictHoldTotal + "</span> districts at the last election.</p>");
    $('#last-winning-party').append("<p>The Liberal-Democrat party secured a majority of " + "<span class=\"circle-dtot\" >" + libDemDistrictHoldTotal + "</span> districts at the last election.</p>");
    $('#last-winning-party').append("<p>The Green party secured a majority of " + "<span class=\"circle-dtot\" >" + greenDistrictHoldTotal + "</span> districts at the last election.</p>");
    var winningPartyName = getWinningParty("Conservative", conservativeDistrictHoldTotal, "Labour", labourDistrictHoldTotal, "Lib-Dem", libDemDistrictHoldTotal, "Green", greenDistrictHoldTotal);
    $('#last-winning-party').append("<span class=\"sqr-dtot c-name\" >" + winningPartyName[0] + "</span>");
    alert("PRE-ELECTION STATS PUBLISHED")
}
//  //////////////////////////////////////////////////////////////////////////
// CAMPAIGN - ELECTION ENGINE (2)
// //////////////////////////////////////////////////////////////////////////
function campaignStratergyImplementation() {
    alert("CAMPAIGN ALGORITHM IMPLEMENTED!");
    partyGT.Conservative = 0;
    partyGT.Labour = 0;
    partyGT.LibDem = 0;
    partyGT.Green = 0;
    var reportingDistrict = 1;
    // SETUP ITTERATION THROUGH AL DISTRICTS
    for (let currentDistrictCount = 1; currentDistrictCount < noOfDistricts; currentDistrictCount++) {
        updatedPeoplePackedList = "";
        // GET RESIDENTS
        noOfResidents = electionEngineGetMembersCountInDistrict(currentDistrictCount);
        var convertedPeopleTotal = 0; // No of people converted this run!!
        for (let residentCount = 1; residentCount < noOfResidents; residentCount++) {
            // RESET RV
            var reductionValue = 0; // Value to be subtracted from persons conversion value (personCV)
            // SPLIT PERSON DATA INTO COMPONENTS. 
            var personComponents = electionEngineUnpackedPerson[residentCount].split("/"); // break up person data into components
            // PUT PERSON COMPONENTS INTO INDIVIDUAL VARS
            var personIdx = personComponents[0];
            var personIssueID = personComponents[1];
            var personName = personComponents[2];
            var personCv = personComponents[3];
            var personParty = personComponents[4];
            // GET SAVED PLEDGES
            var savedPledges = [];
            savedPledges.push("-");
            savedPledges.push(sessionStorage.getItem("DMP," + currentDistrictCount + "," + 1));
            savedPledges.push(sessionStorage.getItem("DMP," + currentDistrictCount + "," + 2));
            savedPledges.push(sessionStorage.getItem("DMP," + currentDistrictCount + "," + 3));
            savedPledges.push(sessionStorage.getItem("DMP," + currentDistrictCount + "," + 4));
            savedPledges.push(sessionStorage.getItem("DMP," + currentDistrictCount + "," + 5));
            savedPledges.push(sessionStorage.getItem("DMP," + currentDistrictCount + "," + 6));
            savedPledges.push(sessionStorage.getItem("DMP," + currentDistrictCount + "," + 7));
            // GET POLITICIAN MANIFESTO ; This contains the full manifesto string... not just the letters "CHW... etc"
            var partyManifesto = [];
            partyManifesto.push("-");
            partyManifesto.push(sessionStorage.getItem("M,1"));
            partyManifesto.push(sessionStorage.getItem("M,2"));
            partyManifesto.push(sessionStorage.getItem("M,3"));
            partyManifesto.push(sessionStorage.getItem("M,4"));
            partyManifesto.push(sessionStorage.getItem("M,5"));
            partyManifesto.push(sessionStorage.getItem("M,6"));
            partyManifesto.push(sessionStorage.getItem("M,7"));
            // GET THE MANIFESTO DIGITS
            var mDigit = [];
            mDigit.push("-")
            var MR = [];
            var partyManifestoResponse = [];
            partyManifestoResponse.push("-");
            MR.push("-");
            var tempM = "";
            var splitIntoTwoHalfs = "";
            // GET MANIFESTO RESPONSE TOKENS /LINE & PLACE   
            for (let y = 1; y <= 7; y++) {
                // partyManifesto[1-7]  = Party Manifesto Pledge response Token
                var splitIt = [];
                var splitIntoTwoHalfs = ""; // reset data so not to grow exponentially
                var temp = partyManifesto[y];
                splitIt.push(temp.split("*"));
                var mLine = splitIt[0];
                mDigit.push(mLine[0]);
                var mItem = mLine[0];
                mItem = mItem.trim();
                var MR = mItem.slice(-1);
                partyManifestoResponse.push(MR);
                // console.log(partyManifestoResponse[y]); //verbose - TBD
            }
            // //////////////////////////////////
            // CONVERSION ENGINE
            // //////////////////////////////////
            // Check if Persons Issue Concern is addresed in Your Party Manifesto
            var hitFlag = 0; // RESET HIT!!
            for (let icount = 1; icount <= 7; icount++) {
                if ((personIssueID === partyManifestoResponse[icount])) {
                    reductionValue = 1;
                    if (savedPledges[icount] === "H") {
                        hitFlag = 1; //match found
                        reductionValue = personConversionValueMax; // Place maximum Conversion value
                    }
                    if (savedPledges[icount] === "M") {
                        hitFlag = 1; //match found
                        for (let x = 0; x < countryInfluence; x++) {
                            reductionValue = getRandom(personConversionValueMax); // Place maximum Conversion value
                        }
                    }
                    if (savedPledges[icount] === "L") {
                        hitFlag = 1; //match found
                        for (let x = 0; x < countryInfluence; x++) {
                            reductionValue = getRandom((personConversionValueMax / 2)); // Place maximum Conversion value
                        }
                    }
                    reductionvalue = politicalCompetition(sessionStorage.getItem("myParty"), reductionValue);
                }
            }
            if (hitFlag === 1) {
                // YES - ISSUE IS IN MANIFESTO
                personCv = personCv - reductionValue; // REDUCE OR WIPE OUT PERSONS CV  TO ZERO
                if (personCv < 0) {
                    // YES - PERSONAL CV IS IN CORRECT LIMITS FOR CONVERSION
                    convertedPeopleTotal++; // Converted this person to your Party
                    var PTY = sessionStorage.getItem("myParty");
                    PTY = PTY.toUpperCase();
                    if (PTY === "CONSERVATIVE") {
                        personParty = "Conservative";
                        $('#conversions-election-container-box').append("<li>" + countryDistricts[currentDistrictCount] + "-" + personName + ": is a new Convert!" + "</li>");
                    }
                    if (PTY === "LABOUR") {
                        personParty = "Labour";
                        $('#conversions-election-container-box').append("<li>" + countryDistricts[currentDistrictCount] + "-" + personName + ": is a new Convert!" + "</li>");
                    }
                    if (PTY === "LIB-DEM") {
                        personParty = "Lib-Dem";
                        $('#conversions-election-container-box').append("<li>" + countryDistricts[currentDistrictCount] + "-" + personName + ": is a new Convert!" + "</li>");
                    }
                    if (PTY === "GREEN") {
                        personParty = "Green";
                        $('#conversions-election-container-box').append("<li>" + countryDistricts[currentDistrictCount] + "-" + personName + ": is a new Convert!" + "</li>");
                    }
                }
            }
            // CONSTRUCT UPDATED PERSON DATA!!!!
            var updatedPerson = "^" + personIdx + "/" + personIssueID + "/" + personName + "/" + personCv + "/" + personParty
            updatedPeoplePackedList = updatedPeoplePackedList + updatedPerson;
        }
        // UPDATE POPULUS CONTENT HERE
        $('#conversions').append("<h2><li>" + "Total Movement: " + countryDistricts[currentDistrictCount] + ":" + convertedPeopleTotal) + "</li></h2>";
        convertedPeopleTotal = 0;
        updatePeopleChunk(currentDistrictCount);
    }
    // UPDATE PEOPLE CHUNK
    function updatePeopleChunk(currentDistrictCount) {
        var UPD = [];
        var districToUpdate = sessionStorage.getItem("E," + currentDistrictCount);
        var packedData
        packedData = sessionStorage.getItem("E," + currentDistrictCount);
        var splitData = packedData.split("@");
        var members = splitData[1]; //people data
        var updatedMembers = updatedPeoplePackedList;
        UPD = (splitData[0] + "@[" + updatedMembers + "~");
        sessionStorage.setItem("E," + currentDistrictCount, UPD);
    }

    function electionEngineGetMembersCountInDistrict(dn) {
        // ////////////////////////////////// 
        // GET SUBTOTAL MEMBERS COUNT OF EACH PARTY
        // dn = district number to check
        var packedData
        packedData = sessionStorage.getItem("E," + dn);
        var splitData = packedData.split("@");
        var members = splitData[1];
        var individualPeople = members.split("^");
        electionEngineUnpackedPerson = members.split("^");
        //     // *** Keep this as remider of each data ***
        //     // console.log(unpackedPerson[0]); // id number
        //     // console.log(unpackedPerson[1]); // issue of concern
        //     // console.log(unpackedPerson[2]); // name
        //     // console.log(unpackedPerson[3]); // convertion threshold
        //     // console.log(unpackedPerson[4]); // current party allaiance
        //     // count up tally
        // }
        return individualPeople.length; // return total  found
    }
}

function politicalCompetition(cpty, redv) {
    // Political Compotition from other parties
    var cmpNv = getRandom(5);
    if (cmpNv === 1) {
        var cmpName = "Conservative";
    }
    if (cmpNv === 2) {
        var cmpName = "Labour";
    }
    if (cmpNv === 3) {
        var cmpName = "Lib-Dem";
    }
    if (cmpNv === 4) {
        var cmpName = "Green";
    }
    if (cmpNv === 5) {
        var cmpName = "None";
    }
    if (cmpName === cpty) {
        return redv; // Return Value Unaffected....Good!!
    }
    if (cmpName != cpty) {
        if (getRandom(personConversionValueMax) != 2) {
            var rvetv = 0;
        }
        return rvetv; // Stop Conversion, removing reduction value
    }
}

function countryInfluence() {
    // /////////////////////
    // Country Influence
    var cHitFlag = 0;
    var C1 = sessionStorage.getItem("c1");
    var C2 = sessionStorage.getItem("c2");
    var C3 = sessionStorage.getItem("c3");
    if (C1.length > C2) {
        cHitFlag = C1;
    }
    if (C2.lenght > C3) {
        cHitFlag = C2;
    }
    if (C3.lenght > C1) {
        cHitFlag = C3;
    }
    return cHitFlag;
}
//  //////////////////////////////////////////////////////////////////////////
// POST - ELECTION ENGINE (3)
// //////////////////////////////////////////////////////////////////////////
function postProcessElection() {
    alert("POST - ELECTION STATS PUBLISHED");
    // repd = district to report on
    // con = conservative info
    // lab = labour info
    // libd = liberal Democrats info
    // grn = green info
    // hld = stronghold party
    function postPublishLine(repd, con, lab, libd, grn, hld) {
        // Get Vote Supports per party in each district
        var postConVotes = postGetPartyMembersCountInDistrict(repd, "Conservative");
        var postLabVotes = postGetPartyMembersCountInDistrict(repd, "Labour");
        var postLibDemVotes = postGetPartyMembersCountInDistrict(repd, "Lib-Dem");
        var postGreenVotes = postGetPartyMembersCountInDistrict(repd, "Green");
        // Running Total Votes Accross ALL Dristricts
        partyGT.Conservative = partyGT.Conservative + postConVotes;
        partyGT.Labour = partyGT.Labour + postLabVotes;
        partyGT.LibDem = partyGT.LibDem + postLibDemVotes;
        partyGT.Green = partyGT.Green + postGreenVotes;
        // function getTopRankParty(party1, pval, party2, pval2, party3, pval3, party4, pval4) 
        // Get The top party in district
        var postTopParty;
        var postTopParty = postGetTopRankParty("Conservative", postConVotes, "Labour", postLabVotes, "Lib-Dem", postLibDemVotes, "Green", postGreenVotes);
        // Build Output HTML in String
        var postStatsResultLineOut = "";
        postStatsResultLineOut += "<div class=\"row no-gutters\">";
        postStatsResultLineOut += " <div id=\"results-stats\" class=\"col-12\">";
        postStatsResultLineOut += "<h2>";
        postStatsResultLineOut += " <!-- // -->";
        postStatsResultLineOut += "<div class=\"row no-gutters\">";
        postStatsResultLineOut += "<div class=\"col-2 keep-insideBSol nopadding\">";
        postStatsResultLineOut += "<h2>";
        postStatsResultLineOut += repd;
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        // District Name
        postStatsResultLineOut += "<!-- // -->";
        postStatsResultLineOut += "<div class=\"col-4 keep-insideBSol nopadding\">";
        postStatsResultLineOut += "<h2>";
        postStatsResultLineOut += countryDistricts[repd] + " *";
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        // CON info
        postStatsResultLineOut += "<div class=\"col-2 keep-insideBSol nopadding\">";
        postStatsResultLineOut += "<h2>";
        postStatsResultLineOut += postConVotes;
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        // LAB Info
        postStatsResultLineOut += "<div class=\"col-1 keep-insideBSol nopadding\">";
        postStatsResultLineOut += "<h2>";
        postStatsResultLineOut += postLabVotes;
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        // LIB-DEM
        postStatsResultLineOut += "<div class=\"col-1 keep-insideBSol nopadding\">";
        postStatsResultLineOut += "<h2>";
        postStatsResultLineOut += postLibDemVotes;
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        // GREEN
        postStatsResultLineOut += "<div class=\"col-1 keep-insideBSol nopadding\">";
        postStatsResultLineOut += "<h2>";
        postStatsResultLineOut += postGreenVotes;
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        // STRONGHOLD
        postStatsResultLineOut += "<div class=\col-1 keep-insideBSol nopadding\">";
        // ***************
        // Get Stronghold Colour
        postStrngHoldColor = postGetStrongHoldColor(postTopParty[0]);
        postStatsResultLineOut += "<h2 class=\"" + postStrngHoldColor + "\">";
        postStatsResultLineOut += postTopParty[0].slice(0, 3); // publish stronghold party in District
        // Record District Hold Count for Each Party
        postDistrictTotalControl(postTopParty[0]);
        // **************
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        postStatsResultLineOut += "<div id=\"insert-stats\"></div>";
        postStatsResultLineOut += "</div>";
        // postStatsResultLineOut = postStatsResultLineOut + "<!-- // -->";
        postStatsResultLineOut += "</h2>";
        postStatsResultLineOut += "</div>";
        postStatsResultLineOut += "</div>";
        // Publish line item to webpage
        $('#post-election-final-results-stats').append(postStatsResultLineOut);
        // SPIT OUT PARTY WITH THE MOST DISTRICT CONTROL
        // ////////////////////////////////////////////
        $('post-election-reporter-domparty-img').html("<h1><img src=\"images/vicky-morse.png\" /></h1>");
        var tdcon = (conservativeDistrictHoldTotal / (conservativeDistrictHoldTotal + labourDistrictHoldTotal + libDemDistrictHoldTotal + greenDistrictHoldTotal)) * 100;
        var domminatPartymessage = "";
        domminatPartymessage += "<h2>The last party with a winning majority was </h2>";
    }

    function postGetStrongHoldColor(tp) {
        // GET STRONG HOLD COLOUR
        // tp = stronghold  party name
        var strngHoldColor = "make-people-grey"; //make Default color Grey.. No clear Winner
        if (tp === "Conservative") {
            var strngHoldColor = "make-people-blue";
        }
        if (tp === "Labour") {
            var strngHoldColor = "make-people-red";
        }
        if (tp === "Lib-Dem") {
            var strngHoldColor = "make-people-yellow";
        }
        if (tp === "Green") {
            var strngHoldColor = "make-people-green";
        }
        return strngHoldColor;
    }

    function postGetTopRankParty(party1Name, pval1, party2Name, pval2, party3Name, pval3, party4Name, pval4) {
        // GET TOP RANK PARTY
        // Check through Parties supplied and find which is top in
        // Set submitted
        // This will allow you to find top party in district
        var postTopPartyValue = 0;
        var postTopPartyName = "";
        if (pval1 > postTopPartyValue) {
            postTopPartyValue = pval1;
            postTopPartyName = party1Name;
        }
        if (pval2 > postTopPartyValue) {
            postTopPartyValue = pval2;
            postTopPartyName = party2Name;
        }
        if (pval3 > postTopPartyValue) {
            postTopPartyValue = pval3;
            postTopPartyName = party3Name;
        }
        if (pval4 > postTopPartyValue) {
            postTopPartyValue = pval4;
            postTopPartyName = party4Name;
        }
        return [postTopPartyName, postTopPartyValue];
    }

    function postGetWinningParty(party1Name, pval1, party2Name, pval2, party3Name, pval3, party4Name, pval4) {
        // GET WINNING RPARTY
        // Check through Parties supplied and find which is top in
        // Set submitted
        // This will allow you to find top party in district
        var winPartyValue = 0;
        var winPartyName = "";
        var hungMessage = "** HUNG PARLIMENT! **"
        if (pval1 > winPartyValue) {
            winPartyValue = pval1;
            winPartyName = party1Name;
        }
        if (pval2 > winPartyValue) {
            winPartyValue = pval2;
            winPartyName = party2Name;
        }
        if (pval3 > winPartyValue) {
            winPartyValue = pval3;
            winPartyName = party3Name;
        }
        if (pval4 > winPartyValue) {
            winPartyValue = pval4;
            winPartyName = party4Name;
        }
        // 
        if (winPartyName === party1Name) {
            switch (winPartyValue) {
                case pval2:
                    winPartyName = hungMessage;
                    break;
                case pval3:
                    winPartyName = hungMessage;
                    break;
                case pval4:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        if (winPartyName === party2Name) {
            switch (winPartyValue) {
                case pval1:
                    winPartyName = hungMessage;
                    break;
                case pval3:
                    winPartyName = hungMessage;
                    break;
                case pval4:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        if (winPartyName === party3Name) {
            switch (winPartyValue) {
                case pval1:
                    winPartyName = hungMessage;
                    break;
                case pval2:
                    winPartyName = hungMessage;
                    break;
                case pval4:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        if (winPartyName === party4Name) {
            switch (winPartyValue) {
                case pval1:
                    winPartyName = hungMessage;
                    break;
                case pval2:
                    winPartyName = hungMessage;
                    break;
                case pval3:
                    winPartyName = hungMessage;
                    break;
            }
        }
        // 
        return [winPartyName, winPartyValue];
    }

    function postGetPartyMembersCountInDistrict(dn, party) {
        // ////////////////////////////////// 
        // GET SUBTOTAL MEMBERS COUNT OF EACH PARTY
        // dn = district number to check
        // party = party to check totals for..
        var packedData = "";
        packedData = sessionStorage.getItem("E," + dn); // <--- Changed from D to E
        var splitData = packedData.split("@");
        var members = splitData[1];
        var individualPeople = members.split("^");
        var tally = 0; // restet tally count
        // ITERATE THROUGH POPULUS & TEST THEIR PARTY ALLEGIEANCE
        for (let i = 1; i < individualPeople.length; i++) {
            var unpackedPerson = individualPeople[i].split("/");
            // *** Keep this as remider of each data ***
            // console.log(unpackedPerson[0]); // id number
            // console.log(unpackedPerson[1]); // issue of concern
            // console.log(unpackedPerson[2]); // name
            // console.log(unpackedPerson[3]); // convertion threshold
            // console.log(unpackedPerson[4]); // current party allaiance
            // count up tally
            // test for party allegienc and increment if so!
            switch (party) {
                case unpackedPerson[4]:
                    tally++; // add one to party Support
                    break;
            }
        }
        return tally; // return total  found
    }

    function postDistrictTotalControl(pty) {
        // Get Overall District Control
        //  This function takes a part and increments the running total
        // districts it has a strong-hold in!
        if (pty === "Conservative") {
            // Add another district to Conservatives
            conservativeDistrictHoldTotal++;
            return;
        }
        if (pty === "Labour") {
            // Add another district to Conservatives
            labourDistrictHoldTotal++;
            return;
        }
        if (pty === "Lib-Dem") {
            // Add another district to Conservatives
            libDemDistrictHoldTotal++;
            return;
        }
        if (pty === "Green") {
            // Add another district to Conservatives
            greenDistrictHoldTotal++;
            return;
        }
    }
    // ///////////////////////////////////////////////////
    // WORKOUT SUPPORT VOTES FOR EACH DISTRICT POST ELECTION
    // Reset Grand Total Votes
    // Before Election Count Up
    partyGT.Conservative = 0;
    partyGT.Labour = 0;
    partyGT.LibDem = 0;
    partyGT.Green = 0;
    // RESET DISTRICT HOLD TOTAL TO ZERO
    conservativeDistrictHoldTotal = 0;
    labourDistrictHoldTotal = 0;
    libDemDistrictHoldTotal = 0;
    greenDistrictHoldTotal = 0;
    var postReportingDistrict = 1;
    do {
        // publishLine(postReportingDistrict, conSubtotal, labourSubtotal, libDemSubtotal, greenSubtotal, strongHold);
        postPublishLine(postReportingDistrict, 0, 0, 0, 0, 0);
        postReportingDistrict++;
    } while (postReportingDistrict < noOfDistricts);
    $('#post-election-reporter-domparty-img').append("<img src=\"images/paul-moss.png\"/>");
    $('#post-election-winning-party').append("<p>The Conservative party has secured a majority of " + "<span class=\"circle-dtot\" >" + conservativeDistrictHoldTotal + "</span>districts!</p>");
    $('#post-election-winning-party').append("<p>The Labour party has secured a majority of " + "<span class=\"circle-dtot\" >" + labourDistrictHoldTotal + "</span>districts!</p>");
    $('#post-election-winning-party').append("<p>The Liberal-Democrat party has secured a majority of " + "<span class=\"circle-dtot\" >" + libDemDistrictHoldTotal + "</span>districts!</p>");
    $('#post-election-winning-party').append("<p>The Green party has secured a majority of " + "<span class=\"circle-dtot\" >" + greenDistrictHoldTotal + "</span>districts!</p>");
    var winningPartyName = postGetWinningParty("Conservative", conservativeDistrictHoldTotal, "Labour", labourDistrictHoldTotal, "Lib-Dem", libDemDistrictHoldTotal, "Green", greenDistrictHoldTotal);
    $('#post-election-winning-party').append("<span class=\"sqr-dtot c-name\" >" + winningPartyName[0] + "</span>");
}
// Load your Politicians image
function insertMyPoliticianImage() {
    var mypol = sessionStorage.getItem("myParty");
    switch (mypol) {
        case "Conservative":
            var myPImage = "cara-leyton.png";
            var myPName = "Cara Leyton";
            break;
        case "Labour":
            var myPImage = "chris-wells.png";
            var myPName = "Chris Wells";
            break;
        case "Lib-Dem":
            var myPImage = "christian-bell.png";
            var myPName = "Christian Bell";
            break;
        case "Green":
            var myPImage = "julie-greenwood.png";
            var myPName = "Julie Greenwood";
            break;
    }
    var picInsertString = "<img src=\"images" + "/" + myPImage + "\"/>";
    picInsertString = picInsertString + "<h3>" + myPName + "- MP/" + sessionStorage.getItem("myParty") + "</h3>";
    $('#my-party-leader').append(picInsertString);
}

function backFromPopulusView() {
    // Jump back to location on district page view where you left it
    window.location.href = "country-districts.html#" + sessionStorage.getItem("CD");
}

function restartGame() {
    // RESTART GAME ..JUMP TO MAIN START PAGE
    alert("Thank you for playing. You will be taken to the start-screen of the game. Please press \"new-game\" to play again!")
    localStorage.setItem("newGame", 0);
    sessionStorage.clear("myParty");
    window.location.assign("index.html")
}

function updateCanvassReportAccuracy(resetnow, issue) {
    //  Accuracy Count up if Count Pass Available then "Accuracy Countup"
    if (sessionStorage.getItem("sHelp") < 0) {
        //  Is Accuracy count tokens available? NO = Exit
        alert("Sorry out of count-up free pass");
        return;
    }
    if (resetnow === 1) {
        //Reset All count Values & Exit
        sessionStorage.setItem("cCount", 0); // reset Crime Count
        sessionStorage.setItem("hCount", 0); // reset health Count
        sessionStorage.setItem("wCount", 0); // wealth Count
        sessionStorage.setItem("eCount", 0); // employment Count
        sessionStorage.setItem("sCount", 0); // employment sCount
    }
    switch (issue) {
        case "C":
            var count = sessionStorage.getItem("cCount");
            count++;
            sessionStorage.setItem("cCount", count);
            break;
        case "H":
            var count = sessionStorage.getItem("hCount");
            count++;
            sessionStorage.setItem("hCount", count);
            break;
        case "W":
            var count = sessionStorage.getItem("wCount");
            count++;
            sessionStorage.setItem("wCount", count);
            break;
        case "E":
            var count = sessionStorage.getItem("eCount");
            count++;
            sessionStorage.setItem("eCount", count);
            break;
        case "S":
            var count = sessionStorage.getItem("sCount");
            count++;
            sessionStorage.setItem("sCount", count);
            break;
    }
}

function showAccuracyReport() {
    if (sessionStorage.getItem("sHelp") < 1) {
        $("#stats-help-button").hide();
        return;
    }
    if (sessionStorage.getItem("sHelp") > 0) {
        alert("(C)rime:" + sessionStorage.getItem("cCount") + " (H)ealth:" + sessionStorage.getItem("hCount") + " (W)ealth:" + sessionStorage.getItem("wCount") + " (E)mployment:" + sessionStorage.getItem("eCount") + " (S)atisfaction:" + sessionStorage.getItem("sCount"));
        temp = sessionStorage.getItem("sHelp");
        temp--;
        sessionStorage.setItem("sHelp", temp); // Save depreciated content  
        alert("Remaining Helps:  " + sessionStorage.getItem("sHelp"));
    }
}

function didYourPartyWin() {
    if (sessionStorage.getItem("myParty") === winPartyName) {
        window.location.href = "winner-page.html";
        var winP = sessionStorage.getItem("winingP");
        var winN = sessionStorage.getItem("winingP");
        var temp1 = "<img src=\"" + winP + "\"/>";
        var temp2 = "<h2>" + winN + "</h2>";
        $("#your-party").append(temp1);
        $("#your-party").append(temp2);
    }
}

function getPartyImage() {
    // Get Your Party Politician Immage
    party = sessionStorage.getItem("myParty");
    var fn = "";
    var nm = "";
    switch (party) {
        case 'Conservative':
            fn = "cara-leyton.png";
            nm = "Cara Leyton";
            break;
        case 'Labour':
            fn = "chris-wells.png";
            nm = "Chris-Wells";
            break;
        case 'Lib-Dem':
            fn = "christian-bell.png";
            nm = "Christian Bell";
            break;
        case 'Green':
            fn = "julie-greenwood.png";
            nm = "Julie Greenwood"
            break;
    }
    sessionStorage.setItem("winingP", fn);
    sessionStorage.setItem("winingN", nm);
    return fn; // Return filename
}

function globalTrendImpact(cnumb) {
    // GLOBAL IMPACT ON ISSUES
    var topup = 60;
    var dc = sessionStorage.getItem("decCount");
    if (dc === null || dc === undefined) {
        dc = topup;
        sessionStorage.setItem("decCount", topup);
    }
    dc--;
    if (dc < 1) {
        dc = topup;
    }
    var rnumb = cnumb;
    sessionStorage.setItem("decCount", dc);
    var today = new Date();
    var h = today.getHours;
    var m = today.getMinutes;
    var s = today.getSeconds;
    if ((s >= 0 && s <= 15) && cnumb === 1) {
        rnumb = 1;
        return rnumb;
    }
    if ((s >= 20 && s <= 30) && cnumb === 2) {
        rnumb = 2;
        return rnumb;
    }
    if ((s >= 35 && s <= 45) && cnumb === 3) {
        rnumb = 3;
        return rnumb;
    }
    if ((s >= 50 && s <= 59) && cnumb === 4) {
        rnumb = 4;
        return rnumb;
    }
    return rnumb;
}

function loadUpInstructions() {
    // LOADUP INSTRUCTIONS
    var instructions = [
        "\"ELECTION-FEVER\" is a strategy game. The objective is to win the general election for your chosen party, by promoting your manifesto in 25 districts, securing voters from each. ",
        "1. LAUNCH GAME",
        "2. SELECT POLITICIAN",
        "- This will align you to a party, also setting your party ribbon colour",
        "3. CREATE GLOBAL ECONOMY",
        "- This will process 195 countries, randomly selects 3 from which it will derive value used in the election engine algorithm.",
        "4. REVIEW DISTRICTS",
        "- Spend most of your time here!",
        "- Do not take the presented data as totally accurate , they come from media polls (which we know in the fog of politics, can be frequently inaccurate). Rather view the \"Residents\" information directly to decide on your pledge approach.",
        "- Create your \"MANIFESTO\" From (25) Available Pledges in 5 categories",
        "- Enter \"Pledges\" screen & prioritize your pledges.",
        "5. CREATE MANIFESTO",
        "- You must select (7) Pledges to create your manifesto.",
        "6. PRIORITIZE PLEDGES",
        "- Prioritize your pledges per district.",
        "- Options are L = Low focus /  M = Med focus /  H = High focus",
        "- Note: Only two ('H') are available for use in each district. These essentially are your major focus and drive on a particular pledge message to the residents. Choose wisely!)",
        "7. ENTER CAMPAIGN",
        "- Warning: Once you pass this stage you cannot go back and make any changes to your campaign!",
        "8. VIEW RESULTS",
        "- On this page press the (3) buttons in sequence to view",
        "1. The political state before election day",
        "2. The effect of your political campaign",
        "3. The changes post election day",
    ];
    var outLineStringBookendStart = "<ul>";
    var outLineStringBookendEnd = "</ul>";
    $("#instruction-insert").append(outLineStringBookendStart);
    for (let i = 0; i < instructions.length; i++) {
        $("#instruction-insert").append("<li>" + instructions[i] + "</li>");
    }
    $("#instruction-insert").append(outLineStringBookendEnd);
}

function checkDistrictPledgeChanged(p1, p2, p3, p4, p5, p6, p7) {
    //    Return 1 if any of the district pledges is not 'L'
    //    i.e if it has been modified
    var tflag = 0;
    if (p1 != "L") {
        tflag = 1;
    }
    if (p2 != "L") {
        tflag = 1;
    }
    if (p3 != "L") {
        tflag = 1;
    }
    if (p4 != "L") {
        tflag = 1;
    }
    if (p5 != "L") {
        tflag = 1;
    }
    if (p6 != "L") {
        tflag = 1;
    }
    if (p7 != "L") {
        tflag = 1;
    }
    if (tflag === 1) {
        return 1;
    }
    return 0;
}