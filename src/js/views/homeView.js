import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

class homeView extends GameView {
  _parentElement = document.querySelector(".score__container");
  _parentStart = document.querySelector(".start__container");
  _target = ".score__home";

  _generateMarkup() {
    const markup = `


      <div class="start__container">
        <img class="world-map" src="/world.67d631da.svg">
        <button class="start__button btn-front">Start</button>
        <button class="start__library btn-front">Library</button>
      </div>

     `;
    return markup;
  }

  renderHome() {
    const markup = this._generateMarkup();
    this._clear();
    this._parentStart.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new homeView();
