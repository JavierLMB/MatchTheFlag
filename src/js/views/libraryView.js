import View from "./View.js";
import gameView, { GameView } from "./gameView.js";

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

  addHandlerPagination(handler) {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(`.library__btn`);
        console.log(btn);
        if (!btn) return;
        if (btn.classList.contains("library__previous")) this._page--;
        if (btn.classList.contains("library__next")) this._page++;
        console.log(this._page);
        handler(this._page);
      }.bind(this)
    );
  }

  _generateMarkup() {
    const markup =
      this._data
        .map(
          (data) => `
        
        <div class="library__container--inner">
          <img class="library__flag" src="${data.image}"/>
          <div class="library__name">${data.name}</div> 
          <div class="library__capital">${data.capital}</div> 
          <div class="library__continent">${data.continent}</div> 
          <div class="library__population">${data.population}</div> 
        </div>

     `
        )
        .join("") +
      `
      <div class="library__container--button">
        <button class="library__previous library__btn btn-front">Previous</button>
        <button class="library__next library__btn btn-front">Next</button>
      </div>
      `;
    return markup;
  }

  // _generateMarkup() {
  //   const curPage = this._data.page;
  //   const numPages = Math.ceil(
  //     this._data.countries.length / this._data.resultsPerPage
  //   );
  //   // console.log(this._data);
  //   // console.log(numPages);

  //   // Page 1, and there are other pages
  //   if (curPage === 1 && numPages > 1) {
  //     return this._generateMarkupButton(curPage + 1, `next`);
  //   }
  //   // Last page
  //   if (curPage === numPages && numPages > 1) {
  //     return this._generateMarkupButton(curPage - 1, `prev`);
  //   }
  //   // Other page
  //   if (curPage < numPages) {
  //     return `
  //     ${this._generateMarkupButton(curPage - 1, `prev`)}
  //     ${this._generateMarkupButton(curPage + 1, `next`)}
  //     `;
  //   }
  //   // Page 1, and there are NO other pages
  //   return ``;
  // }

  // _generateMarkupButton(page, direction) {
  //   return `
  //   <button data-goto="${page}" class="btn--inline pagination__btn--${direction}">
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-left"></use>
  //     </svg>
  //     <span>Page ${page}</span>
  //   </button>
  //   `;
  // }
}

export default new LibraryView();
