import View from "./View.js";
import { GameView } from "./gameView.js";

class ScoreView extends GameView {
  _parentElement = document.querySelector(".score__container");

  addHandlerButton(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const click = e.target.closest(`.score__button`);
      if (!click) return;
      console.log(click);

      handler();
    });
  }

  _generateMarkup() {
    const markup = `

        <div class="score__container--result">
          
          <div class=" score__final">Better luck next time!</div>

          <div class="score__outcome--container">
            <div class="score__win">${this._data.win}</div>
            <div class="score__win">-</div>
            <div class="score__loss">3</div>
          </div>
          <div class="score__highscore">Current highscore! ?</div>
        </div>

        

        <div class="score__container--button">
          <button class="score__button score__home">Home</button>
          <button class="score__button score__try-again">Try Again</button>
        </div>

     `;
    return markup;
  }

  renderScore(score) {
    if (score.loss !== 3) return;

    setTimeout(() => {
      this._clearFlagName(score);
      this.render(score);
    }, 1000);
  }

  _clearFlagName(score) {
    const flagParent = document.querySelector(".flag__container");
    const nameParent = document.querySelector(".name__container");
    const title = document.querySelector(".container__main--title");
    flagParent.innerHTML = "";
    nameParent.innerHTML = "";
    title.textContent =
      score.win < 2 ? "Better luck next time!" : "Awesome job!";
  }
}

export default new ScoreView();
