// ------- DATA ----------- 
var flashState = true;
var flashHandState = true;
var globeShake = true;
var cCp = 0;
var noOfCountriesMax = 195;
var gDPMax = 10;
var popMax = 10;
var healthMax = 100;
var cGdp = 0;
var cPop = 0;
var cHealth = 0;
var roundDownDigit = 0;
// Setup World data 
var worldEconomy = [];
var threeCountriesSelected = false;


// uk- Districts
var ukdistricts = {
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

// ---------------------------------------Functions---------

// State Controller monitoring (Available buttons etc)
function stateController() {
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
            return;

        // Make Conservative
        case 'Conservative':
            $('.ribbon').removeClass('make-ribbon-red');
            $('.ribbon').addClass('make-ribbon-blue');
            $('.ribbon').removeClass('make-ribbon-yellow');
            $('.ribbon').removeClass('make-ribbon-green');
            $('.ribbon').removeClass('make-ribbon-grey');
            return;

        // Make Lib Dem
        case 'Lib-Dem':
            $('.ribbon').removeClass('make-ribbon-red');
            $('.ribbon').removeClass('make-ribbon-blue');
            $('.ribbon').addClass('make-ribbon-yellow');
            $('.ribbon').removeClass('make-ribbon-green');
            $('.ribbon').removeClass('make-ribbon-grey');
            return;

        // Make Green Party
        case 'Green':
            $('.ribbon').removeClass('make-ribbon-red');
            $('.ribbon').removeClass('make-ribbon-blue');
            $('.ribbon').removeClass('make-ribbon-yellow');
            $('.ribbon').addClass('make-ribbon-green');
            $('.ribbon').removeClass('make-ribbon-grey');
            return;

    }

}





// Save Session Data
function saveSession() {
}
// Reset Session Data
function resetSessionData() {
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
    if (flashHandState === true) {
        flashHandState = false;
        $('.point-hand').addClass('flashHandNow');
        return;
    }
    if (flashHandState === false) {
        flashHandState = true;
        $('.point-hand').removeClass('flashHandNow');
        return
    }
}
// Populate ECONOMY TABLE
function populateTable() {
    // alert(flashState);
    if (globeShake === true) {
        globeShake = false;
        $('.globe').addClass('globeShake');
        // return;
    }
    if (globeShake === false) {
        globeShake = true;
        $('.globe').removeClass('globeShake');
        // return;
    }

    // Reset World Economy Stats
    var worldEconomy = [];
    cCp++;
    var num = (Math.random() * gDPMax);
    cGdp = num.toFixed(roundDownDigit);
    var num = (Math.random() * healthMax);
    cHealth = num.toFixed(roundDownDigit);
    var num = (Math.random() * popMax);
    cPop = num.toFixed(roundDownDigit)
    // Create row of Country Data
    if (cCp < noOfCountriesMax) {
        $('#global-table').append("<tr id=\"" + cCp + "\"><td>" + countries[cCp] + "#" + "</td><td>" + cGdp + "," + "</td><td>" + cHealth + "," + "</td><td>" + cPop + "</td></tr>");
    }
    var cstrng = countries[cCp] + "," + cGdp + "," + cHealth + "," + cPop;
    //  Store Info in Session Memory
    sessionStorage.setItem(cCp, cstrng);
    $('td').addClass('colorTable');
    // Grab Three Random Countries for weighting data in district generation
    if (threeCountriesSelected === false && cCp > noOfCountriesMax) {
        grabThreeCountries();
    }
}
// Grab Three Countries for use for Genation of Weighting on District Starts
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
    // alert(countName1 + "/" + countName2 + "/" + countName3);
    sessionStorage.setItem("c1", countName1);
    sessionStorage.setItem("c2", countName2);
    sessionStorage.setItem("c3", countName3);
    // Acknowledge 3 Random coutries have been found. No need to repeat
    threeCountriesSelected = true;
}







function generateDistricts() {


    // alert("pop");

    for (let i = 1; i < 50; i++) {


        var districtName = ukdistricts[i];

        // alert(districtName);

        var details = "Crime=50% Affluence=56% Health=3/10";



        var districtLineOut = "<div class=\"row\">";

        districtLineOut = districtLineOut + "<div class=\"col-6 keep-insideBSol\">";
        districtLineOut = districtLineOut + "<div id=\"" + i + "\" class=\"plank\"><h1>" + i + ":" + districtName + "[" + details + "]" + "</h1></div>";
        districtLineOut = districtLineOut + "</div>";

        // Pledge Buttons
        districtLineOut = districtLineOut + "<div class=\"col-6 keep-insideBSo\">";        
        districtLineOut = districtLineOut +"<div class=\"pledge-buttons\">"+"<h1>" + i + ":\</h1><h1>Adujst <span class=\"fas fa-cogs\"></span></h1></div>";

        districtLineOut = districtLineOut + "</div>";


        // alert(districtLineOut);
        console.log(districtLineOut);

        $('#district-list').append(districtLineOut);
    }
}
