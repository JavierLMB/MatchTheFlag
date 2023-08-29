import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

class homeView extends GameView {
  _parentElement = document.querySelector(".score__container");
  _parentStart = document.querySelector(".start__container");
  _target = ".score__home";

  _generateMarkup() {
    const markup = `

        <div class="start__container">
          <button class="start__button btn-push">
            <span class="btn-front">Start</span>
          </button>
          <button class="start__button--library">
            <span>Library</span>
          </button>
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
