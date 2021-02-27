/*sticky nav*/
$(document).ready(function(){
    $('.js--menu').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
        
    }, {
  offset: '60px;'
});
   
    
    /*Scroll on buttons */
    $('.js--scroll-to-order').click(function () {
       $('html, body').animate({scrollTop: $('.js--order').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-menu').click(function () {
       $('html, body').animate({scrollTop: $('.js--menu').offset().top}, 1000); 
    });
    /*Animations on scroll*/
     $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
     $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated lightSpeedIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
});