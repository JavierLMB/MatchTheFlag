import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import gameView from "./views/gameView.js";
import flagView from "./views/flagView.js";
import nameView from "./views/nameView.js";
import scoreView from "./views/scoreView.js";
import lifeView from "./views/lifeView.js";
import startView from "./views/startView.js";
import counterView from "./views/counterView.js";
import homeView from "./views/homeView.js";

//////////////////////////////////////

const controlGame = async function () {
  try {
    await model.loadCountryData();
    flagView.render(model.state.countries);
    nameView.render(model.state.countries);
  } catch (err) {
    console.log(err);
  }
};

const controlMatch = function (countryName, score) {
  console.log(countryName);
  model.matchGame(countryName);
  flagView.matchCondition(model.state);
  nameView.matchCondition(model.state);
  console.log(score, "😘");
  gameView._generateMore(score, controlGame, model.resetGame);
  lifeView._lifeCounter(score);
  scoreView.renderScore(score);
  counterView._winCounter(score);
};

const controlReMatch = function () {
  model.resetGame();
  scoreView._clear();
  startView._clear();
  controlGame();
};

const controlHome = function () {
  model.resetGame();
  scoreView._clear();
  startView.render();
};

const init = function () {
  flagView.addHandlerClick(controlMatch);
  nameView.addHandlerClick(controlMatch);
  scoreView.addHandlerClick(controlMatch);
  scoreView.addHandlerGame(controlReMatch);
  startView.addHandlerGame(controlReMatch);
  // homeView.addHandlerHome(controlHome);
  gameView._highScoreGlobal();
};
init();
