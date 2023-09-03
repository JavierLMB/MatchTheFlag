import View from "./View.js";
import gameView, { GameView } from "./gameView.js";
import crown from "../../imgs/crown-svgrepo-com.svg";
import globe from "../../imgs/globe-svgrepo-com.svg";
import user from "../../imgs/user-plus-alt-1-svgrepo-com.svg";

class LibraryView extends GameView {
  _parentElement = document.querySelector(".library__container");
  _mainContainer = document.querySelector(".start__container");
  _page = 1;

  addHandlerLibrary(handler) {
    this._mainContainer.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(`.start__library`);
        if (!btn) return;

        this._parentElement.classList.remove("hidden");

        handler();
      }.bind(this)
    );
  }

  _generateMarkup() {
    const markup = this._data
      .map(
        (data) => `
        
        <div class="library__container--inner">
          <div class="library__container--details">
          
            <img class="library__flag" src="${data.image}"/>
            <div class="library__name">${data.name}</div> 

            <div class="library__info">

              <div class="library__capital library__info--details">
                <img class="library__icons" src="${crown}"/>
                ${data.capital}
              </div> 

              <div class="library__continent library__info--details">
                <img class="library__icons" src="${globe}"/>
                ${data.continent}
              </div> 

              <div class="library__population library__info--details">
                <img class="library__icons" src="${user}"/>
                ${data.population.toLocaleString("en-US")} 
              </div>

            </div>
              
          </div>
        </div>

     `
      )
      .join("");
    return markup;
  }
}

export default new LibraryView();
