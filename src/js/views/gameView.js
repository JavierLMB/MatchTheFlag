import View from "./View.js";
import { MATCHING_LIMITS } from "./../config.js";

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

  matchCondition(state) {
    if (state.matching.length > MATCHING_LIMITS) {
      state.matching.splice(0, 2);
      state.result = "";
    }
    console.log(state.matching);
    this._winCondition(state);
    if (state.score.length === 8) console.log("yessir");
  }

  _winCondition(state) {
    if (state.result !== "win") return;
    const matchedCountry = this._findHTMLCountry(state);
    matchedCountry.classList.add("hidden__winner");
    matchedCountry.classList.remove("flag__image--active");
    this._scoreCounter(state);
    console.log(matchedCountry);
  }

  _findHTMLCountry(state) {
    let matchedCountry = state.matching.map((name) => name.split("-")[0])[0];
    matchedCountry = this._parentElement.querySelector(
      `[data-country="${matchedCountry}"]`
    );
    return matchedCountry;
  }

  _scoreCounter(state) {
    const countryPoint = state.matching.map((name) => name.split("-")[0])[0];

    state.score.push(countryPoint);
  }
}

export default new GameView();
