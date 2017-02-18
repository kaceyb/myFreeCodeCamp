var j = {
  "coord":{"lon":-87.82,"lat":33.93},
  "weather":[
    {"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}
  ],
  "base":"stations",
  "main":{"temp":288.15,"pressure":1023,"humidity":87,"temp_min":288.15,"temp_max":288.15},
  "visibility":16093,
  "wind":{"speed":6.2,"deg":190,"gust":9.3},
  "clouds":{"all":90},
  "dt":1484110560,
  "sys":{"type":1,"id":224,"message":0.1833,"country":"US","sunrise":1484139418,"sunset":1484175732},
  "id":4098161,"name":"Winfield","cod":200}

  console.log(j.weather[0].main);
  console.log(j.main.temp);
  console.log(j.name);
  console.log(j.sys.country);
