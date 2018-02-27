'use strict';

// Mock data
var train1 = new Train(42, '10:25', '11:23');
var train2 = new Train(42, '12:25', '13:23');
var train3 = new Train(42, '14:25', '15:23');
var trainObjects = {
  container: '.train-data',
  objects: [train1, train2, train3]
};

var train = new TrainTable(trainObjects);

function initialize() {
  train.departFrom();
}

initialize();