$( document ).ready(function() {
 console.log('would go here');
    
var initialDelay = 800;
var delayAmt = 500;
    

    $('.show-on-load').delay(initialDelay).queue(function(){
        $(this).addClass('fade-in').clearQueue();
    });

 
//   $('.show-on-load').addClass('fade-in'); 
//    $('#hopium-text').delay(initialDelay).slideUp(delayAmt).fadeIn(delayAmt);
    $('.youtube').delay(initialDelay).fadeIn(delayAmt);
    $('.soundcloud').delay(initialDelay+delayAmt).fadeIn(delayAmt);
    $('.contact').delay(initialDelay+delayAmt+delayAmt).fadeIn(delayAmt);
    
    
}); 