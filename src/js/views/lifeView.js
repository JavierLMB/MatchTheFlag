import { GameView } from "./gameView.js";

class LifeView extends GameView {
  _parentElement = document.querySelector(".heart__container");

  lifeCounter(score) {
    if (score.loss === 0) return;
    if (score.loss > 3) return;
    const fullHealth = this._parentElement.querySelector(
      `[data-heart="${score.loss}"]`
    );
    fullHealth.classList.add("losser__effect--heart");
  }
}

export default new LifeView();
