import View from "./View.js";

class GameView extends View {
  _parentFlag = document.querySelector(".flag__container");
  _parentName = document.querySelector(".name__container");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkupFlags() {
    return this._data
      .map(
        (data) => `
          <figure class="flag__image">
            <img src="${data.image}" />
          </figure>
        `
      )
      .join("");
  }

  _generateMarkupNames() {
    this._namePositionShuffle(this._data);
    return this._data
      .map(
        (data) => `
        <div class="name__country">${data.name}</div> 
        `
      )
      .join("");
  }

  _namePositionShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

export default new GameView();
