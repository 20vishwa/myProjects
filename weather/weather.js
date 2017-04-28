var latitude;
var longitude;
var celsius;
var fahrenheit;
$(document).ready(function () {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon="
    + longitude+"&APPID=188b68e6b443a5380ce7ee0f0bb49cfc", function (json) {
			//var rawJson = JSON.stringify(data);
			//var json = JSON.parse(rawJson);
      var country=json.sys.country;
      var location=json.name;
      $('.location_country').text(location+", "+country);
      var temp=json.main.temp;
      var t=temp-273.15;
      celsius=(temp-273.15).toFixed(0) + "°C";
      fahrenheit=(1.8*t+32).toFixed(0) + "°F";
      $('.temperature').text(celsius);
      $('input[type=radio][name=farenheit-celcius]').change(function () {
        if ($('#f').is(':checked')) {
          $('.temperature').text(fahrenheit);
        }
        if ($('#c').is(':checked'))
        {
          $('.temperature').text(celsius);
        }
      })
    var temps = [32, 21, 0];
    var imgs = ['url("http://www.pixelstalk.net/wp-content/uploads/2016/04/Summer-holiday-wallpapers-HD.jpg")', 'url("http://i.imgur.com/rG0P1ro.jpg")', 'url("http://i.imgur.com/voCuONs.jpg")', 'url("http://i.imgur.com/5tFHSKa.jpg")']
    // Select custom backgroudn image according to temperature range.
    if (t >= temps[0]) {
      $('body').css('background-image', imgs[0])
    } else if (t < temps[0] && temp >= temps[1]) {
      $('body').css('background-image', imgs[1])
    } else if (t < temps[1] && temp >= temps[2]) {
      $('body').css('background-image', imgs[2])
    } else if (t < temps[2]) {
      $('body').css('background-image', imgs[3])
    }
    });
  });
}
});
