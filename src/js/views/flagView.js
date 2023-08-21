import View from "./View.js";
import gameView from "./gameView.js";

class FlagView extends View {
  _parentElement = document.querySelector(".flag__container");

  _generateMarkupFlags() {
    return this._data
      .map(
        (data) => `
       <div class="flag__image--container">
          <figure class="flag__image">
            <img data-country="${data.name}" src="${data.image}" />
          </figure>
          </div>
        `
      )
      .join("");
  }
}

export default new FlagView();
