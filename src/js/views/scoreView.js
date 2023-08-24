import View from "./View.js";
import { GameView } from "./gameView.js";

class ScoreView extends GameView {
  _parentElement = document.querySelector(".container");

  _generateMarkup() {
    const markup = `
    <div class="score__container">
        <div class="score__final">Better luck next time!</div> 
        <div class="score__result--container">
          <div class="score__win">${this._data.win}</div>
          <div class="score__loss">${this._data.loss}</div>
        </div>
        <div class="score__highscore">Current highscore! 5</div>
     </div>
     `;
    console.log(markup);
    return markup;
  }

  renderScore(score) {
    if (score.loss !== 3) return;
    this.render(score);
  }
}

export default new ScoreView();
