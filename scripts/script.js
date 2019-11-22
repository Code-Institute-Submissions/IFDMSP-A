// Define Variables
var tick = 0;
// Clear Flashing
function clearFlasher(){
$('flash1').removeClass('makeRed').removeClass('makeBlue').removeClass('makeYellow').removeClass('makeGreen');
$('flash2').removeClass('makeRed').removeClass('makeBlue').removeClass('makeYellow').removeClass('makeGreen');
$('flash3').removeClass('makeRed').removeClass('makeBlue').removeClass('makeYellow').removeClass('makeGreen');
}






// Flasher
    function flasher(){
        alert('pop');
        tick ++;
        
        if(tick > 3)
        {
            tick = 0;
            return;
        }


        switch(tick){
        case 0:
        clearFlasher();
        $('flash1').addClass('makeRed');
        $('flash2').addClass('makeBlue');
        $('flash3').addClass('makeYellow');
        return;
        case 1:
        clearFlasher();
        $('flash1').addClass('makeBlue');
        $('flash2').addClass('makeYellow');
        $('flash3').addClass('makeGreen');
        return;
        case 2:
        clearFlasher();
        $('flash1').addClass('makeYellow');
        $('flash2').addClass('makeGreen');
        $('flash3').addClass('makeRed');
        return;
        case 3:
        clearFlasher();
        $('flash1').addClass('makeBlue');
        $('flash2').addClass('makeYellow');
        $('flash3').addClass('makeGreen');
        return;
        }
        }
