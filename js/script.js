// alert("pop");

var flashState = true;

var candidates = {
    'Cara Leyton': 'Coservative',
    'Chris Wells': 'Labour',
    'Christian Bell': 'Lib-Dem',
    'Julie Greenwood': 'Other'
};








// Populate Political Sway 
$(document).ready(function () {
    $(".candidates").click(function () {
        var candidateName = $(this).children('h1').text();
        $('#political-sway').html('<h1>' + candidates[candidateName] + '</h1>')
    })
});





// Flash
function flasher(){
   
// alert(flashState);


if (flashState === true){
    flashState = false;
    $('.flashIt').addClass('flashNow');
   
    return;
}


if(flashState === false){
    flashState=true;
    $('.flashIt').removeClass('flashNow');
   
    return
}





}