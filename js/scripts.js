$('.a').hide();
$('.b').hide();
$('.c').hide();
$('.d').hide();

$(window).on('resize', function(){
      var item = $(this);
      if (item.width() > 992) { 

      $('#main, #input, #nav').addClass('computer only').removeClass('mobile only, tablet only');

      }
    else if (item.width() < 480)
    {
        $('#main, #input, #nav').addClass('mobile only').removeClass('computer only, tablet only');
    }
      else 
    {
        $('#main, #input, #nav').addClass('tablet only').removeClass('computer only, mobile only');
    }
});

$('.get').click(function(){
  
  var zip = $('#zip').val();

  $.simpleWeather ({
  	location: zip,
  	unit: 'f',

// Get _weather_ object
success: function(weather){
// Get & store temperature
      var temp = weather.temp + '°';
      // Get & store city
      var city = weather.city;
      // get and store state
      var state = weather.region;
      // get and store current weather
      var currentTemp = weather.currently;
      // get and store current weather code
      var type = weather.code;

      var title = "WEATHER"
      // var type =  'img\\' + weather.code + '.png';
      // output weather code
      console.log(type);

      // get and store weather for next day
      // var upcomingWeather = weather.forecast[1].day + ' ' + weather.forecast[1].high;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.currently').text(currentTemp);
      $('.today').text(title);
      // $('.img').src.replace(type);
      $('.a').show();
      $('.b').show();
      $('.c').show();
      $('.d').show();
      // $('p').text(upcomingWeather); 

},

error: function(message){
	$('body').html('<p>' + error + '</p>');
}
      });

});

if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }


  $('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

  var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
        
      console.log(weather);
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;

      var state = weather.region;

      var currentTemp = weather.currently;

      var title = "WEATHER"
            
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.currently').text(currentTemp);
      $('.today').text(title);


      $('.a').show();
      $('.b').show();
      $('.c').show();
      $('.d').show();
      
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function

$('.tomorrow').click(function(){
  
  var zip = $('#zip').val();

  $.simpleWeather ({
    location: zip,
    unit: 'f',

// Get _weather_ object
success: function(weather){

      var state = weather.forecast[1].text
      
      var currentTemp = weather.forecast[1].high+'°'
  
      var next = weather.forecast[1].day

      var title = "WEATHER"

      // var type =  'img\\' + weather.code + '.png';
      // output weather code
      console.log(next);

      // get and store weather for next day
      // var upcomingWeather = weather.forecast[1].day + ' ' + weather.forecast[1].high;
      
      // Output to hooks in HTML
      $('.temp').text(currentTemp);
      $('.state').text(state);
      $('.currently').text(next);
      $('.today').text(title);
     
      $('.a').show();
      $('.b').show();
      $('.c').hide();
      $('.d').show();
},

error: function(message){
  $('body').html('<p>' + error + '</p>');
}
      });

});
  

$('.it').click(function(){
  
  var zip = $('#zip').val();

  $.simpleWeather ({
    location: zip,
    unit: 'f',

// Get _weather_ object
success: function(weather){

      var state = weather.updated
  
      console.log(state);

      $('.today').text(state)
      
     
      $('.a').hide();
      $('.b').hide();
      $('.c').hide();
      $('.d').hide();
},

error: function(message){
  $('body').html('<p>' + error + '</p>');
}
      });

});
  