import View from "./View.js";

class GameView extends View {
  _parentFlag = document.querySelector(".flag__container");
  _parentName = document.querySelector(".name__container");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerClick(handler, parent, target) {
    parent.addEventListener(
      "click",
      function (e) {
        const click = e.target.closest(target);
        if (!click) return;
        const countryName = click.getAttribute("data-country");
        console.log(click);
        console.log(countryName);
        // this._toggleActiveFlag(click);

        handler(countryName);
      }.bind(this)
    );
  }

  _toggleActiveFlag(flag) {
    const allFlags = Array.from(document.querySelectorAll(".flag__image img"));

    const hasActiveFlag = allFlags.some((flag) =>
      flag.classList.contains("flag__image--active")
    );

    if (!hasActiveFlag) flag.classList.toggle("flag__image--active");
    if (hasActiveFlag) flag.classList.remove("flag__image--active");
  }

  _generateMarkupNames() {
    this._namePositionShuffle(this._data);
    return this._data
      .map(
        (data) => `<div class="name__country--container">
        <div class="name__country" data-country="${data.name}">${data.name}</div> 
        </div>
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
