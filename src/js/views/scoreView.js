import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

class ScoreView extends GameView {
  _parentElement = document.querySelector(".score__container");
  _target = ".score__button";

  _generateMarkup() {
    const markup = `

        <div class="score__container--result">
          

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
      this._clearFlagName();
      this._setRenderTitle(score);
      this.render(score);
    }, 1000);
  }

  _setRenderTitle(score) {
    const title = document.querySelector(".container__main--title");
    title.textContent =
      score.win < 2 ? "Better luck next time!" : "Awesome job!";
  }
}

export default new ScoreView();
