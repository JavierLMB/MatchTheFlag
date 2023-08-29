import View from "./View.js";
import { GameView } from "./gameView.js";

class FlagView extends GameView {
  _parentElement = document.querySelector(".flag__container");
  _target = `.flag__image img`;
  _suffix = `-Flag`;

  _generateMarkup() {
    const markup =
      `<div class="flag__container--inner">` +
      this._data
        .map(
          (data) => `
          <div class="flag__image--container">
           <figure class="flag__image">
            <img data-country="${data.name}" src="${data.image}" />
           </figure>
          </div>
        `
        )
        .join("") +
      `</div>`;
    return markup;
  }
}

export default new FlagView();
