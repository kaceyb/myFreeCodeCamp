var x = document.getElementById("msg");
var t = document.getElementById("tmp");
var y = document.getElementById("msg2");
var curTemp;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by your browser.";
  }
}

function showPosition(position) {
  var latlon = "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

  var api = "http://api.openweathermap.org/data/2.5/weather?" + latlon + "&units=imperial&appid=b0a7882454220897727319391282c9c3";

  $(function() {
    $.getJSON(api, function(json) {
      //console.log(json);

      var temp = json.main.temp;
      var city = json.name;
      var country = json.sys.country;
      var sky = json.weather[0].description;
      var icon = json.weather[0].icon;

      curTemp = temp;

      fillWeather(temp,city,country,sky,icon);
    });
  });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function fillWeather(temp,city,country,sky,icon) {

  var weather = "Location: " + city + ", " + country;
  var weather2 = "Temp: " + temp + " &#8457;";
  var weather3 = "Sky: " + sky + "<br> <img src=http://openweathermap.org/img/w/" + icon + ".png />";

  x.innerHTML = weather;
  t.innerHTML = weather2;
  y.innerHTML = weather3;

}

var count = 1;
function tempConvert() {
  count++
  if (count % 2 == 0) {
    curTemp = (curTemp -32) * 5 / 9;
    curTemp = curTemp.toFixed(2);
    t.innerHTML = curTemp + " &#8451;";
  } else {
    curTemp = (curTemp * 9) / 5 + 32;
    t.innerHTML = curTemp + " &#8457;";
  }
}
