import View from "./View.js";
import { GameView } from "./gameView.js";

class LifeView extends GameView {
  _parentElement = document.querySelector(".heart__container");

  _lifeCounter(score) {
    if (score.loss === 0) return;
    if (score.loss > 3) return;
    console.log(score.loss);
    const fullHealth = this._parentElement.querySelector(
      `[data-heart="${score.loss}"]`
    );
    console.log(fullHealth);
    fullHealth.classList.add("losser__effect--heart");
  }
}

export default new LifeView();
