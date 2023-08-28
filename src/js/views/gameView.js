import View from "./View.js";
import { MATCHING_LIMITS } from "./../config.js";

export class GameView extends View {
  _parentElement = document.querySelector(".container");

  _score = {
    win: 0,
    loss: 0,
    finalWins: 0,
    highScore: this._highScoreGlobal() ? this._highScoreGlobal() : 0,
  };

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
        // console.log(this._score, "✅");

        this._highScore();
        this._lossLimit();
        this._nextRound();

        const score = this._score;
        handler(countryName, score);
      }.bind(this)
    );
  }

  _lossLimit() {
    if (this._score.loss >= 3) {
      this._score.loss = 0;
      this._score.win = 0;
      this._score.finalWins = 0;
      this._score.highScore = this._highScoreGlobal()
        ? this._highScoreGlobal()
        : 0;
    }
  }

  _nextRound() {
    if (this._score.win % 4 !== 0 || this._score.win === 0) return;
    this._score.win = 0;
  }

  _highScore() {
    if (this._score.finalWins < this._score.highScore) return;

    this._score.highScore = this._score.finalWins;

    localStorage.setItem("highScore", this._score.highScore);
    let highScore = localStorage.getItem("highScore");

    this._score.highScore = highScore;
    console.log(highScore, "game");
  }

  _highScoreGlobal() {
    let highScore = localStorage.getItem("highScore");
    return highScore;
  }

  addHandlerHome(handler) {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const click = e.target.closest(this._target);
        if (!click) return;
        this._scoreViewReset();
        handler();
      }.bind(this)
    );
  }

  _scoreViewReset() {
    const title = document.querySelector(".container__main--title");
    title.textContent = "Match The Flags To Their Country Names";
    const hearts = document.querySelectorAll(`[data-heart]`);
    hearts.forEach((heart) => heart.classList.add("losser__effect--heart"));
    const winCounter = document.querySelector(".counter__count");
    winCounter.classList.add("counter__hidden");
  }

  addHandlerGame(handler) {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const click = e.target.closest(this._target);
        if (!click) return;
        this._mainViewReset();
        handler();
      }.bind(this)
    );
  }

  _mainViewReset() {
    const title = document.querySelector(".container__main--title");
    title.textContent = "Match The Flags To Their Country Names";
    const hearts = document.querySelectorAll(`[data-heart]`);
    hearts.forEach((heart) => heart.classList.remove("losser__effect--heart"));
    const winCounter = document.querySelector(".counter__count");
    winCounter.classList.remove("counter__hidden");
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
    this._clearMatchArray(state);
    this._winCondition(state);
    this._lossCondition(state);
    this._scoreTrack(state);
  }

  _lossCondition(state) {
    if (state.result !== "loss") return;
    if (state.matching.length < MATCHING_LIMITS) return;

    const matchedCountry = this._findHTMLCountry(state);
    matchedCountry.classList.remove("flag__image--active");
    matchedCountry.classList.add("losser__effect");
    setTimeout(() => matchedCountry.classList.remove("losser__effect"), 820);

    this._score.loss++;
  }

  _winCondition(state) {
    if (state.result !== "win") return;
    const matchedCountry = this._findHTMLCountry(state);
    matchedCountry.classList.add("winner__effect");
    matchedCountry.classList.remove("flag__image--active");
    console.log(matchedCountry);

    this._score.finalWins++;
    this._score.win++;
  }

  _clearMatchArray(state) {
    if (
      state.matching.length > MATCHING_LIMITS &&
      (state.result === "win" || state.result === "loss")
    ) {
      state.matching.splice(0, 2);
      state.result = "";
    }
  }

  _findHTMLCountry(state) {
    let matchedCountry = state.matching;

    matchedCountry = matchedCountry
      .filter((item) => {
        if (item.endsWith(this._suffix)) return true;
        return false;
      })
      .map((item) => item.slice(0, -this._suffix.length));

    matchedCountry = this._parentElement.querySelector(
      `[data-country="${matchedCountry}"]`
    );

    return matchedCountry;
  }

  _scoreTrack(state) {
    state.score.win = this._score.win;
    state.score.loss = this._score.loss;
    // console.log(state.score);
  }

  _generateMore(score, handler, resetGame) {
    if (score.win % 4 !== 0 || score.win === 0) return;
    console.log(score, "SCOREEEEE");
    this._clearFlagName();
    resetGame();
    handler();
  }

  _clearFlagName() {
    const flagParent = document.querySelector(".flag__container");
    const nameParent = document.querySelector(".name__container");
    const counterParent = document.querySelector(".counter__count");
    flagParent.innerHTML = "";
    nameParent.innerHTML = "";
    counterParent.innerHTML = "";
  }
}

export default new GameView();

// Reset highscore
// localStorage.removeItem("highScore");
