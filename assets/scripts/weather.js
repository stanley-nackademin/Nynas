'use strict';

const KEY = '25fcb5ba7d564b1fc9bab65a004efa5e';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=nynashamn&appid=' + KEY;

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

function $(selector) {
  return document.querySelector(selector);
}

/* function find(selector) {
  return new DOMElement(selector);
} */

var weatherObjects = {
  container: '.weather-data',
  objects: []
};


fetch(API_URL).proceed(response => {
  var weatherData = JSON.parse(response);
  var weatherList = weatherData.list;
  
  for (let i = 0; i < 5; i++) {
    var hours = new Date(weatherList[i].dt_txt).getHours() + ":00";
    var windSpeed = weatherList[i].wind.speed;
    var temperature = weatherList[i].main.temp;
    var weather = weatherList[i].weather[0].description;

    var weather1 = new Weather(hours, weather, temperature, windSpeed);
    console.log(weatherObjects.objects);
    weatherObjects.objects.push(weather1);
    /* weatherObjects.objects.push(new Weather(hours, weather, temperature, windSpeed)); */

    console.log(hours);
    console.log(windSpeed);
    console.log(temperature);
    console.log(weather);
  }
});

var weatherTest = new WeatherTable(weatherObjects);
weatherTest.putData();