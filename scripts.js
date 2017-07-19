console.log('js sourced');

var myApp = angular.module('myApp', []);

myApp.controller('BlockController', function() {
  console.log('angular sourced');
  var blocks = this;
  blocks.blocksArray = [];
  blocks.numClickedRed = 0;
  blocks.numClickedBlue = 0;
  blocks.numClickedGreen = 0;
  blocks.numClickedYellow = 0;
  //need click event that adds blocks when color cube button is clicked
  blocks.addToDomRed = function(name) {
    console.log(blocks.blocksArray);
    blocks.blocksArray.push("red_cube");
    blocks.numClickedRed ++;
    };

  blocks.addToDomBlue = function(name) {
    console.log(blocks.blocksArray);
    blocks.blocksArray.push("blue_cube");
    blocks.numClickedBlue ++;
    };

  blocks.addToDomGreen = function(name) {
    console.log(blocks.blocksArray);
    blocks.blocksArray.push("green_cube");
    blocks.numClickedGreen ++;
    };

  blocks.addToDomYellow = function(name) {
    console.log(blocks.blocksArray);
    blocks.blocksArray.push("yellow_cube");
    blocks.numClickedYellow ++;
    };

});
