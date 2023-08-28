import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

class homeView extends GameView {
  _parentElement = document.querySelector(".score__container");
  _target = ".score__home";

  _generateMarkup() {
    const markup = `

    <button class="start__button">Start</button>

     `;
    return markup;
  }

  renderHome() {
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new homeView();
