import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import gameView from "./views/gameView.js";
import flagView from "./views/flagView.js";
import nameView from "./views/nameView.js";
import scoreView from "./views/nameView.js";
import lifeView from "./views/nameView.js";

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
  // lifeView._lifeCounter();

  scoreView.renderScore(score);
};

const init = function () {
  flagView.addHandlerRender(controlGame);
  nameView.addHandlerRender(controlGame);
  flagView.addHandlerClick(controlMatch);
  nameView.addHandlerClick(controlMatch);
  lifeView.addHandlerClick(controlMatch);
};
init();
