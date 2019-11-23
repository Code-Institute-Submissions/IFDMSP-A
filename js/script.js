// ------- DATA ----------- 
var flashState = true;
var globeShake = true;

var cCp = 0;
var noOfCountriesMax = 10;

var gDPMax = 1000;
var popMax = 500;
var healthMax = 100;

var cGdp = 0;
var cPop = 0;
var cHealth = 0;

var roundDownDigit = 0;

// World data
var worldEconomy = [];




var candidates = {
    'Cara Leyton': 'Coservative',
    'Chris Wells': 'Labour',
    'Christian Bell': 'Lib-Dem',
    'Julie Greenwood': 'Other'
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
function saveGameSessionData() {
    // Save political sway
    var party = $('political-sway').text;
    sessionStorage.setItem("party", party);
    // Save Politicians Name
    var politician = $('').text;
    sessionStorage.setItem("politician", politician);
}




// Generate world control variables
//  and push into array
$(document).ready(function () {
    function generateWorldEconomy() {
        var numberOfCountries = 195;
        var gdp = 0;
        var populus = 0;
        var health = 0;
        var affluence = 0;
        for (let i = 0; i < numberOfCountries; i++) {
            gdp = (Math.random() * 1000);
            console.log(i, ":", gdp, ":", populus, ":", health, ":", affluence);
        }
    }
})






$('#genbutton').click(function () {


    alert("pop!");

    // generateWorldEconomy();


})





// Save Session Data
function saveSession() {
}


// Reset Session Data
function resetSessionData() {
}


// Populate Political Sway 
$(document).ready(function () {
    $(".candidates").click(function () {
        var party = $(this).children('h1').text();
        $('#political-sway').html('<h1>' + candidates[party] + '</h1>')
    })
});



// Flash
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


function globeRotate() {

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
 
    // Country Number Ticker
    cCp = cCp + 1;
    // cCp = cCp.toFixed(roundDownDigit);

    var num = (Math.random() * gDPMax);
    cGdp = num.toFixed(roundDownDigit)

    var num = (Math.random() * healthMax);
    cHealth = num.toFixed(roundDownDigit)

    var num = (Math.random() * popMax);
    cPop = num.toFixed(roundDownDigit)




    if (cCp < noOfCountriesMax) {
        $('#global-table').append("<tr><td>" + cCp + "</td><td>" + cGdp + "</td><td>" + cHealth + "</td><td>" + cPop + "</td></tr>");
    }





}