import View from "./View.js";

export class GameView extends View {
  _parentElement = document.querySelector(".container");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const click = e.target.closest(this._target);
        if (!click) return;
        const countryName = click.getAttribute("data-country");
        console.log(click);
        console.log(countryName);
        this._toggleActiveFlag(click);

        handler(countryName);
      }.bind(this)
    );
  }

  _toggleActiveFlag(click) {
    const allElements = Array.from(document.querySelectorAll(this._target));

    const hasActiveElements = allElements.some((click) =>
      click.classList.contains("flag__image--active")
    );

    if (!hasActiveElements) click.classList.toggle("flag__image--active");
    if (hasActiveElements) click.classList.remove("flag__image--active");
  }
}

export default new GameView();
