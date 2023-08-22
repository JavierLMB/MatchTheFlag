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
        const countryName = click.getAttribute("data-country") + this._suffix;
        const activeElementCountry = this._toggleActiveFlag(click);

        if (
          activeElementCountry &&
          countryName !== activeElementCountry + this._suffix
        )
          return;

        handler(countryName);
      }.bind(this)
    );
  }

  _toggleActiveFlag(click) {
    const allElements = Array.from(document.querySelectorAll(this._target));

    const activeElement = allElements.find((click) =>
      click.classList.contains("flag__image--active")
    );

    const activeElementCountry = activeElement?.getAttribute("data-country");

    if (!activeElement) click.classList.toggle("flag__image--active");
    if (activeElement) click.classList.remove("flag__image--active");
    return activeElementCountry;
  }

  matchCondition(result) {
    console.log(result);
  }
}

export default new GameView();
