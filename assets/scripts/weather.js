'use strict';

const KEY = '25fcb5ba7d564b1fc9bab65a004efa5e';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=nynashamn&units=metric&lang=se&appid=' + KEY;

function HttpGet(url) {
  this.url = url;
  this.ajax = new XMLHttpRequest();
}

HttpGet.prototype.proceed = function(callback) {
  this.ajax.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      callback(this.response);
    }
  }
  this.ajax.open('GET', this.url, true);
  this.ajax.send();
}

function fetch(url) {
  return new HttpGet(url);
}

function firstCharUpper(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

var weatherObjects = {
  container: '.weather-data',
  objects: []
};

fetch(API_URL).proceed(response => {
  let weatherData = JSON.parse(response);
  let weatherList = weatherData.list;

  for (let i = 0; i < 5; i++) {
    let hours = new Date(weatherList[i].dt_txt).getHours() + ":00";
    let windSpeed = Number(weatherList[i].wind.speed).toFixed(1) + "m/s";
    let temperature = Number(weatherList[i].main.temp).toFixed(1) + "&deg;C";
    let weatherState = firstCharUpper(weatherList[i].weather[0].description);
    
    let weatherObject = new Weather(hours, weatherState, temperature, windSpeed);
    weatherObjects.objects.push(weatherObject);
  }
  printWeather();
});

function printWeather() {
  var weather = new WeatherTable(weatherObjects);
  weather.putData();
}
