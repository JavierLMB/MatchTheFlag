import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import gameView from "./views/gameView.js";

//////////////////////////////////////

const controlFlags = async function () {
  try {
    await model.loadFlag();
    gameView.render(model.state.countries);
  } catch (err) {
    console.log(err);
  }
};

const controlMatch = function (countryName) {
  console.log(countryName);
};

const init = function () {
  gameView.addHandlerRender(controlFlags);
  gameView.addHandlerClick(
    controlMatch,
    gameView._parentFlag,
    `.flag__image img`
  );
  gameView.addHandlerClick(
    controlMatch,
    gameView._parentName,
    `.name__country`
  );
};
init();
