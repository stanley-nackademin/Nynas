'use strict';

// Constructor för väder
function Weather(time, weatherState, warmth, wind) {
  this.time = time;
  this.weatherState = weatherState;
  this.warmth = warmth;
  this.wind = wind;
}

// Constructor för tåg
function Train(nr, departure, arrival) {
  this.nr = nr;
  this.departure = departure;
  this.arrival = arrival;
}

// Table parent
function Table(data) {
  this.container = document.querySelector(data.container);
  this.objects = data.objects;
}

// Table prototype, add weather data to table
Table.prototype.putData = function() {
  for (let i = 0; i < this.objects.length; i++) {
    var row = document.createElement('tr');

    for (const [key, value] of Object.entries(this.objects[i])) {
      var cell = document.createElement('td');
      cell.innerHTML = value;
      row.appendChild(cell);
    }
    this.container.appendChild(row);
  }
}

// Remove all weather data from table and query weather data
Table.prototype.updateData = function() {
  this.container.innerHTML = "";
  this.putData();
}

// Constructor för tågtabell-objekt
function TrainTable(data) {
  Table.call(this, data);
}

/*
* Viktig! Ompekningen för prototypen måste ske innan man lägger till fler prototyp-
* variablar eller funktioner annars skrivs de över.
*/

// Let TrainTable inherit the functions from Table object
TrainTable.prototype = Object.create(Table.prototype);
TrainTable.prototype.constructor = TrainTable;

TrainTable.prototype.departFrom = function() {
  
}

TrainTable.prototype.trafficStatus = function(text) {
  this.statusText = document.querySelector('.traffic-status');
  this.statusText.innerHTML = text;
}

// Constructor för vädertabell-objekt
function WeatherTable(data) {
  Table.call(this, data);
}

// Let WeatherTable inherit the functions from Table object
WeatherTable.prototype = Object.create(Table.prototype);
WeatherTable.prototype.constructor = WeatherTable;


// Mock data
/* var train1 = new Train(42, '10:25', '11:23');
var train2 = new Train(42, '12:25', '13:23');
var train3 = new Train(42, '14:25', '15:23');
var trainObjects = {
  container: '.train-data',
  objects: [train1, train2, train3]
};

var weather1 = new Weather('09:00', 'Moln', '16&deg;C', '3m/s');
var weather2 = new Weather('12:00', 'Sol', '18&deg;C', '4/s');
var weather3 = new Weather('15:00', 'Sol', '20&deg;C', '2m/s');
var weather4 = new Weather('18:00', 'Regn', '19&deg;C', '3m/s');
var weather5 = new Weather('21:00', 'Moln', '17&deg;C', '1m/s');
var weatherObjects = {
  container: '.weather-data',
  objects: [weather1, weather2, weather3, weather4, weather5]
};


var trainTest = new TrainTable(trainObjects);
var weatherTest = new WeatherTable(weatherObjects);
trainTest.putData();
weatherTest.putData(); */