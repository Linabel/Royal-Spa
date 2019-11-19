

//navigation
    function openSlideMenu() {
        document.getElementById('sideMenu').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }

    function closeSlideMenu() {
        document.getElementById('sideMenu').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
    }
//responsive slider

//Jquery plug in
//Source: http:responsiveslides.com
// Demo: https:github.com/viljamis/ResponsiveSlides.js
//Name : viljamis/ResponsiveSlides.js


$(document).ready(function(){
   $(".rslides").responsiveSlides();  
    
});

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});