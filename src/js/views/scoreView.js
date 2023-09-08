import { GameView } from "./gameView.js";

class ScoreView extends GameView {
  _parentElement = document.querySelector(".score__container");
  _target = ".score__try-again";

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
    const titleMap = [
      { maxWins: 3, title: "Better luck next time!" },
      { maxWins: 5, title: "Doing great!" },
      { maxWins: 8, title: "Good job!" },
      { maxWins: 10, title: "Great job!" },
      { maxWins: 12, title: "Awesome job!" },
      { maxWins: 15, title: "Excellent job!" },
      { maxWins: 17, title: "Fantastic job!" },
      { maxWins: 20, title: "Impressive!" },
      { maxWins: 25, title: "Unbelievable!" },
      { maxWins: 30, title: "Incredible!" },
      { maxWins: 35, title: "Magnificent!" },
      { maxWins: 40, title: "Remarkable!" },
      { maxWins: 45, title: "Exceptional!" },
      { maxWins: 50, title: "Supreme!" },
    ];

    for (const { maxWins, title } of titleMap) {
      if (score.finalWins <= maxWins) {
        const titleElement = document.querySelector(".container__main--title");
        titleElement.textContent = title;
        break;
      }
    }
  }

  _generateMarkup() {
    const markup = `

        <div class="score__container--result">
          

          <div class="score__outcome--container">
            <div class="score__win">${this._data.finalWins}</div>
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
}

export default new ScoreView();
