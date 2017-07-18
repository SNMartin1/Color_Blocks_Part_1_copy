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

// $(document).ready(function() {
//   console.log("ready function working");
//
//   $('#block').append('<button class="buttons" id="button_red">0</button>');
//   $('#block').append('<button class="buttons" id="button_blue">0</button>');
//   $('#block').append('<button class="buttons" id="button_green">0</button>');
//   $('#block').append('<button class="buttons" id="button_yellow">0</button>');
//
//   var numClickedRed = 0;
//   var numClickedBlue = 0;
//   var numClickedGreen = 0;
//   var numClickedYellow = 0;
//
// $('#button_red').on('click', function(){
//   console.log("red button clicked");
//   numClickedRed += 1;
//   //targets the red button and changes the text to show the number of times it has been clicked
//   $(this).text(numClickedRed);
//   $('#add_blocks').append('<div id="red_cube"></div>');
// });  //end of red button click function
//
//
// $('#button_blue').on('click', function(){
//   console.log("blue button clicked");
//   numClickedBlue += 1;
//   //targets the blue button and changes the text to show the number of times it has been clicked
//   $(this).text(numClickedBlue);
//   $('#add_blocks').append('<div id="blue_cube"></div>');
//   });  //end of button click function
//
//
// $('#button_green').on('click', function(){
//   console.log("green button clicked");
//   numClickedGreen += 1;
//   //targets the green button and changes the text to show the number of times it has been clicked
//   $(this).text(numClickedGreen);
//   $('#add_blocks').append('<div id="green_cube"></div>');
//   });  //end of button click function
//
//
// $('#button_yellow').on('click', function(){
//   console.log("yellow button clicked");
//   numClickedYellow += 1;
//   //targets the yellow button and changes the text to show the number of times it has been clicked
//   $(this).text(numClickedYellow);
//   $('#add_blocks').append('<div id="yellow_cube"></div>');
//   });  //end of button click function
//
//   $('#add_blocks').on('click', '#red_cube', function() {
//     console.log("removed cube");
//     numClickedRed -= 1;
//     $('#button_red').text(numClickedRed);
//     $(this).remove();
//   }); //end of remove button and updates counter
//
// $('#add_blocks').on('click', '#blue_cube', function() {
//   console.log("removed cube");
//   numClickedBlue -= 1;
//   $('#button_blue').text(numClickedBlue);
//   $(this).remove();
// }); //end of remove button and updates counter
//
// $('#add_blocks').on('click', '#green_cube', function() {
//   console.log("removed cube");
//   numClickedGreen -= 1;
//   $('#button_green').text(numClickedGreen);
//   $(this).remove();
// }); //end of remove button and updates counter
//
// $('#add_blocks').on('click', '#yellow_cube', function() {
//   console.log("removed cube");
//   numClickedYellow -= 1;
//   $('#button_yellow').text(numClickedYellow);
//   $(this).remove();
// }); //end of remove button and updates counter
//
// }); //end of ready function
