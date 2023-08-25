import { mark } from "regenerator-runtime";
import View from "./View.js";
import { GameView } from "./gameView.js";

class NameView extends GameView {
  _parentElement = document.querySelector(".name__container");
  _target = `.name__country`;
  _suffix = `-Name`;

  _generateMarkup() {
    this._namePositionShuffle(this._data);
    const markup =
      `<div class="name__container--inner">` +
      this._data
        .map(
          (data) => `<div class="name__country--container">
        <div class="name__country" data-country="${data.name}">${data.name}</div> 
        </div>
        `
        )
        .join("") +
      `</div>`;
    return markup;
  }

  _namePositionShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

export default new NameView();
