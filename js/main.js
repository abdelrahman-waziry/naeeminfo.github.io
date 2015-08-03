//ESC key event

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("#categories-menu").slideUp(200, "linear");
        $("#newsDropdown-menu").slideUp(200, "linear");
    }
});


// Responsive nav 

$("#nav-trigger").click(function(){
  $("#responsive-nav").toggleClass("active");
});

// Drop down menu 

$("#newsDropdown-trigger").click(function(){
  $("#newsDropdown-menu").slideToggle(60, "linear");
});


// Overlay search

$(document).ready(function(){
	$("#search-trigger").click(function(){
		$("#search-form").toggleClass("active");
		$("#search-field").toggleClass("active");
		$("#search-trigger").toggleClass("active");
		$("#search-btn").show();
	});
});

// Country select

$("#country-trigger").click(function(){
  $("#countries-list").slideToggle(200, "linear");
});

$("#egypt-tab").click(function(){
  $("#dubai-fixed-menu").css("display","none");
  $("#egypt-fixed-menu").css("display","inline-block");
});

$("#dubai-tab").click(function(){
  $("#egypt-fixed-menu").css("display","none");
  $("#dubai-fixed-menu").css("display","inline-block");
});

//Share button 

$(".toggle-shareBtn").click(function () {
  $(".share-menu").toggleClass("active");
});

//MixitUp 

$(function(){
  $('#top-stories').mixItUp();
});

$("#categories-trigger").click(function(){
  $("#categories-menu").slideToggle("fast");
  $("#categories-menu").find('button').css("display","block");
});


// Slick slider

$(document).ready(function(){
  $('.wide-stories').slick({
    arrows: true
  });
});

//Hero owl carousal 

$(document).ready(function() {
 
  $("#latestNews-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      responsive: true,
      autoPlay: true,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});