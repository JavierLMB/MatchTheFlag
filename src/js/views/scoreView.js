import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

class ScoreView extends GameView {
  _parentElement = document.querySelector(".score__container");
  _target = ".score__try-again";

  _generateMarkup() {
    const markup = `

        <div class="score__container--result">
          

          <div class="score__outcome--container">
            <div class="score__win">${this._data.finalWins}</div>
            <div class="score__win">-</div>
            <div class="score__loss">3</div>
          </div>
          <div class="score__highscore">Current highscore! ${this._data.highScore}</div>
        </div>

        

        <div class="score__container--button">
          <button class="score__button score__home">Home</button>
          <button class="score__button score__try-again">Try Again</button>
        </div>

     `;
    return markup;
  }

  _clearCounter() {
    const counterParent = document.querySelector(".counter__count");
    counterParent.classList.add("hidden");
  }

  renderScore(score) {
    if (score.loss !== 3) return;

    setTimeout(() => {
      this._clearFlagName();
      this._clearCounter();
      this._setRenderTitle(score);
      this.render(score);
    }, 1000);
  }

  _setRenderTitle(score) {
    const title = document.querySelector(".container__main--title");
    if (score.finalWins <= 3) title.textContent = "Better luck next time!";
    if (score.finalWins > 3 && score.win <= 5)
      title.textContent = "Doing great!";
    if (score.finalWins > 5 && score.win <= 8) title.textContent = "Good job!";
    if (score.finalWins > 8 && score.win <= 10)
      title.textContent = "Great job!";
    if (score.finalWins > 10 && score.win <= 12)
      title.textContent = "Awesome job!";
    if (score.finalWins > 12 && score.win <= 15)
      title.textContent = "Excellent job!";
    if (score.finalWins > 15 && score.win <= 17)
      title.textContent = "Fantastic job!";
    if (score.finalWins > 17 && score.win <= 20)
      title.textContent = "Impressive!";
    if (score.finalWins > 20 && score.win <= 25)
      title.textContent = "Unbelievable!";
    if (score.finalWins > 25 && score.win <= 30)
      title.textContent = "Incredible!";
  }
}

export default new ScoreView();
// title.textContent =
//   score.win < 5 ? "Better luck next time!" : "Awesome job!";
