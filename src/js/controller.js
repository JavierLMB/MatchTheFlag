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
import libraryView from "./views/libraryView.js";

//////////////////////////////////////

const controlGame = async function () {
  try {
    await model.loadCountryData();
    flagView.render(model.state.countries);
    nameView.render(model.state.countries);
    homeView.colordash();
  } catch (err) {
    console.log(err);
    model.resetGame();
    await controlGame();
  }
};

const controlLibrary = async function (page) {
  try {
    await model.loadLibraryData();
    libraryView.render(model.library.countries);
    libraryView.renderClose();
    libraryView.addHandlerCloseKeydown();
    libraryView.addHandlerCloseClick();
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

const controlMatch = function (countryName, score) {
  model.matchGame(countryName);
  flagView.matchCondition(model.state);
  nameView.matchCondition(model.state);
  console.log(model.state.matching);
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
  homeView.renderHome();
};

const init = function () {
  flagView.addHandlerClick(controlMatch);
  nameView.addHandlerClick(controlMatch);
  scoreView.addHandlerClick(controlMatch);
  scoreView.addHandlerGame(controlReMatch);
  startView.addHandlerGame(controlReMatch);
  homeView.addHandlerHome(controlHome);
  libraryView.addHandlerLibrary(controlLibrary);
  gameView._highScoreGlobal();
  homeView.colordash();
};
init();
