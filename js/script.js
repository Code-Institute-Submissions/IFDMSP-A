

// ------- DATA ----------- 

var flashState = true;

var candidates = {
    'Cara Leyton': 'Coservative',
    'Chris Wells': 'Labour',
    'Christian Bell': 'Lib-Dem',
    'Julie Greenwood': 'Other'
};

// Game Session Data
var gameData = {
    "party": "none",
    "politician": "none",
    "total votes": 0,
    "canvassed districts": 0,
    "popularity rating": 0,
    "campaign running": false,

};



// World data
var worldEconomy = {
    0: 0,
    1: 0,


};


// ---------------------------------------Functions---------


function saveGameSessionData() {

    // Save political sway
    var party = $('political-sway').text;
    sessionStorage.setItem("party", party);

    // Save Politicians Name
    var politician = $('').text;
    sessionStorage.setItem("politician",politician );







}





function generateWorldEconomy() {


    return;
}





// Save Session Data
function saveSession() {



}



// Reset Session Data
function resetSessionData() {



}




// Populate Political Sway 
$(document).ready(function () {

    $(".candidates").click(function () {
        
        var politician = $(this).text();

        $('#politician').html('<h1>' + candidates[politician] + '</h1>')
    })

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