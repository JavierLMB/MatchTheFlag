import { GameView } from "./gameView.js";

class StartView extends GameView {
  _parentElement = document.querySelector(".start__container");
  _target = ".start__button";
}

export default new StartView();
