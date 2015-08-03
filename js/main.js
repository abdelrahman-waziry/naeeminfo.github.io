//ESC key event

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("#categories-menu").slideUp(200, "linear");
        $("#newsDropdown-menu").slideUp(200, "linear");
        $("#countries-list").slideUp(200, "linear");
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

//ease scroll 

    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
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

        $(function() {
            $('#market-tabs').tabs();
        });

//Google Charts API

  
    google.load('visualization', '1.1', {packages: ['corechart']});
    google.setOnLoadCallback(drawCharts);

    function drawCharts(){

      // BEGIN LINE GRAPH

    var data = new google.visualization.DataTable();
      data.addColumn('number', 'Value');
      data.addColumn('number', 'Current index');

      data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

        var lineOptions = {
                backgroundColor: 'transparent',
                colors: ['cornflowerblue', '#222'],
                fontName: 'Source Sans Pro',
                focusTarget: 'category',
                chartArea: {
                        left: 50,
                        top: 10,
                        width: '80%',
                        height: '70%'
                },
                hAxis: {
                        //showTextEvery: 12,
                        textStyle: {
                                fontSize: 11
                        },
                        baselineColor: 'transparent',
                        gridlines: {
                                color: 'transparent'
                        }
                },
                vAxis: {
                        minValue: 0,
                        maxValue: 50,
                        baselineColor: '#DDD',
                        gridlines: {
                                color: '#DDD',
                                count: 4
                        },
                        textStyle: {
                                fontSize: 11
                        }
                },
                crosshair: { trigger: 'both' },
                legend: {
                        position: 'bottom',
                        textStyle: {
                                fontSize: 12
                        }
                },
                animation: {
                        duration: 1200,
                        easing: 'out'
                }
        };

        var lineChart = new google.visualization.LineChart(document.getElementById('chart-20'));
        lineChart.draw(data, lineOptions);
        lineChart = new google.visualization.LineChart(document.getElementById('chart-30'));
        lineChart.draw(data, lineOptions);
        lineChart = new google.visualization.LineChart(document.getElementById('chart-70'));
        lineChart.draw(data, lineOptions);
        lineChart = new google.visualization.LineChart(document.getElementById('chart-100'));
        lineChart.draw(data, lineOptions);
        
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(marketChange);
  function marketChange() {
    var data = google.visualization.arrayToDataTable([
      ['Sun', 20, 28, 38, 45],
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50]
      // Treat first row as data as well.
    ], true);

    var options = {
      legend:'none',
      chartArea: {
                        left: 50,
                        top: 10,
                        width: '80%',
                        height: '70%'
                },
        animation: {
            duration: 1200,
            easing: 'out'
        }
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('marketChange-chart'));

    chart.draw(data, options);
  }


google.load('visualization', '1.1', {packages: ['corechart']});
google.setOnLoadCallback(efChart);
function efChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Egyptians', 'Foriegners'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'investor distribution',
          curveType: 'category',
          legend: { position: 'bottom' }

        };

        var chart = new google.visualization.LineChart(document.getElementById('ef-chart'));

        chart.draw(data, options);
      }