import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

class LibraryView extends GameView {
  _parentElement = document.querySelector(".container");
  _libraryContainer = document.querySelector(".library__container");

  addHandlerLibrary(handler) {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(`.start__library`);
        if (!btn) return;

        this._libraryContainer.classList.remove("hidden");

        // const goToPage = +btn.dataset.goto;
        handler();
      }.bind(this)
    );
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(this._data);
    // console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage + 1, `next`);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage - 1, `prev`);
    }
    // Other page
    if (curPage < numPages) {
      return `
      ${this._generateMarkupButton(curPage - 1, `prev`)}
      ${this._generateMarkupButton(curPage + 1, `next`)}
      `;
    }
    // Page 1, and there are NO other pages
    return ``;
  }

  _generateMarkupButton(page, direction) {
    return `
    <button data-goto="${page}" class="btn--inline pagination__btn--${direction}">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${page}</span>
    </button>
    `;
  }
}

export default new LibraryView();
