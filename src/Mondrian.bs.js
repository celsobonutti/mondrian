'use strict';

var Js_math = require("bs-platform/lib/js/js_math.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function make(numberOfColumns, numberOfRows) {
  var cells = Belt_Array.makeBy(Math.imul(numberOfRows, numberOfColumns), (function (param) {
          var n = Js_math.random_int(0, 300);
          if (n <= 210) {
            return /* White */0;
          } else if (n <= 240) {
            return /* Red */1;
          } else if (n <= 270) {
            return /* Yellow */2;
          } else {
            return /* Blue */3;
          }
        }));
  return {
          numberOfRows: numberOfRows,
          numberOfColumns: numberOfColumns,
          cells: cells
        };
}

function makeRandom(param) {
  return make(Js_math.random_int(4, 16), Js_math.random_int(4, 16));
}

function numberToRandomFractions(number) {
  var fractions = Belt_Array.makeBy(number, (function (param) {
          return String(Js_math.random_int(1, 13)) + "fr";
        }));
  return Belt_Array.joinWith(fractions, " ", (function (a) {
                return a;
              }));
}

function colorToString(cell) {
  switch (cell) {
    case /* White */0 :
        return "white";
    case /* Red */1 :
        return "#F50F0F";
    case /* Yellow */2 :
        return "#FAE317";
    case /* Blue */3 :
        return "#0D7FBE";
    
  }
}

var randomInt = Js_math.random_int;

exports.randomInt = randomInt;
exports.make = make;
exports.makeRandom = makeRandom;
exports.numberToRandomFractions = numberToRandomFractions;
exports.colorToString = colorToString;
/* No side effect */
