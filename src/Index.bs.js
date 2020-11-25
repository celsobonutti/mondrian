'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var Mondrian$Mondrian = require("./Mondrian.bs.js");

function Index$App(Props) {
  var match = React.useState(function () {
        return Mondrian$Mondrian.makeRandom(undefined);
      });
  var setMondrian = match[1];
  var mondrian = match[0];
  var gridStyle = {
    backgroundColor: "black",
    display: "grid",
    height: "90vh",
    width: "90vh",
    gridGap: "5px",
    gridTemplateColumns: Mondrian$Mondrian.numberToRandomFractions(mondrian.numberOfColumns),
    gridTemplateRows: Mondrian$Mondrian.numberToRandomFractions(mondrian.numberOfRows)
  };
  var generateNewMondrian = function (param) {
    return Curry._1(setMondrian, (function (param) {
                  return Mondrian$Mondrian.makeRandom(undefined);
                }));
  };
  return React.createElement("div", {
              style: gridStyle,
              onClick: generateNewMondrian
            }, Belt_Array.map(mondrian.cells, (function (cell) {
                    return React.createElement("div", {
                                style: {
                                  backgroundColor: Mondrian$Mondrian.colorToString(cell),
                                  height: "100%",
                                  width: "100%"
                                }
                              });
                  })));
}

var App = {
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, {}), "root");

exports.App = App;
/*  Not a pure module */
