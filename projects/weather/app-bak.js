var x = document.getElementById("msg");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by your browser.";
  }
}

function showPosition(position) {
  var latlon = "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

  console.log(latlon);

  var api = "http://api.openweathermap.org/data/2.5/weather?" + latlon + "&units=imperial&appid=b0a7882454220897727319391282c9c3";
  var curWeather;
  var weather;
  var temp;

  $(function() {
    $.getJSON(api, function(json) {
      console.log("JSON Data: " + json.weather[0].description);
      curWeather = json;
      console.log(curWeather);
      temp = curWeather.main.temp + "&#8457;";

      weather = "City: " + curWeather.name + "<br> Country: " + curWeather.sys.country + "<br> Temp: " + temp + "<br> Sky: " + curWeather.weather[0].description + "<br> <img src=http://openweathermap.org/img/w/" + curWeather.weather[0].icon + ".png />";

      x.innerHTML = weather;

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

function tempConvert() {
  if (temp.indexOf("&#8457;") > -1) {
    temp = (temp -32) * 5 / 9 + "&#8451;";
    weather = "City: " + curWeather.name + "<br> Country: " + curWeather.sys.country + "<br> Temp: " + temp + "<br> Sky: " + curWeather.weather[0].description + "<br> <img src=http://openweathermap.org/img/w/" + curWeather.weather[0].icon + ".png />";
    x.innerHTML = weather;
  } else {
    temp = (temp * 9) / 5 + 32 + "&#8457;";
    weather = "City: " + curWeather.name + "<br> Country: " + curWeather.sys.country + "<br> Temp: " + temp + "<br> Sky: " + curWeather.weather[0].description + "<br> <img src=http://openweathermap.org/img/w/" + curWeather.weather[0].icon + ".png />";
    x.innerHTML = weather;
  }
}
