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

const init = function () {
  gameView.addHandlerRender(controlFlags);
};
init();
