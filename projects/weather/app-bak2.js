var x = document.getElementById("msg");
var weather;
// var city;
// var country;
// var sky;
// var temp;
// var icon;

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

  $(function() {
    $.getJSON(api, function(json) {
      //console.log("JSON Data: " + json.weather[0].description);
      var curWeather = json;
      console.log(curWeather);

      var temp = curWeather.main.temp;
      var city = curWeather.name;
      var country = curWeather.sys.country;
      var sky = curWeather.weather[0].description;
      var icon = curWeather.weather[0].icon;

      fillWeather(temp,city,country,sky,icon);
    });
  });
}

//console.log(curWeather);

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
  var tempNow = temp + " &#8457;";
  console.log(tempNow);

  var weather = "City: " + city + "<br> Country: " + country + "<br> Temp: " + tempNow + "<br> Sky: " + sky + "<br> <img src=http://openweathermap.org/img/w/" + icon + ".png />";

  x.innerHTML = weather;

  //tempConvert(tempNow,city,country,sky,icon);
}

function tempConvert(temp,city,country,sky,icon) {
  if (temp.indexOf("&#8457;") > -1) {
    var temp = (temp -32) * 5 / 9 + "&#8451;";
    var weather = "City: " + city + "<br> Country: " + country + "<br> Temp: " + temp + "<br> Sky: " + sky + "<br> <img src=http://openweathermap.org/img/w/" + icon + ".png />";
    x.innerHTML = weather;
  } else {
    var temp = (temp * 9) / 5 + 32 + "&#8457;";
    var weather = "City: " + city + "<br> Country: " + country + "<br> Temp: " + temp + "<br> Sky: " + sky + "<br> <img src=http://openweathermap.org/img/w/" + icon + ".png />";
    x.innerHTML = weather;
  }
}
