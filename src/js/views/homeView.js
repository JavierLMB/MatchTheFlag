import { GameView } from "./gameView.js";
import worldSvg from "../../imgs/globe-2-svgrepo-com.svg";

class homeView extends GameView {
  _parentElement = document.querySelector(".score__container");
  _parentStart = document.querySelector(".start__container");
  _target = ".score__home";

  renderHome() {
    const markup = this._generateMarkup();
    this.clear();
    this._parentStart.insertAdjacentHTML("afterbegin", markup);
    this.colordash();
  }

  colordash() {
    let title = document.querySelector(".container__main--title");
    title.innerHTML = title.innerText
      .split("")
      .map(
        (letters, i) =>
          `<span class="container__main--title--effect" style="transition-delay:${
            i * 10
          }ms;")>
           ${letters}
          </span>`
      )
      .join(" ");
  }

  _generateMarkup() {
    const markup = `


      <div class="start__container">
        <img class="world-globe" src="${worldSvg}" alt="Illustration of earth">
        <button class="start__button btn-front">Start</button>
        <button class="start__library btn-front">Library</button>
      </div>

     `;
    return markup;
  }
}

export default new homeView();
