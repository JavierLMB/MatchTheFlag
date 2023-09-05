import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

class CounterView extends GameView {
  _parentElement = document.querySelector(".counter__count");

  winCounter(score) {
    // console.log(score.finalWin, this._finalWin);
    if (+this._parentElement.innerText === score.finalWins) return;

    this._parentElement.innerText = score.finalWins;
  }
}

export default new CounterView();
