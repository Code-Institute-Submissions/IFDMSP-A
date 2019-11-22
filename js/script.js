// alert("pop");
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
