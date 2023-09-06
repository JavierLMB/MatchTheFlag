export default class View {
  _data;

  render(data) {
    if (!data) return console.log("error"); // Make a better guardclause

    this._data = data;
    const markup = this._generateMarkup();
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }
}
