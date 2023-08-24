export default class View {
  _data;

  render(data) {
    if (!data) return console.log("error"); // Make a better guardclause

    this._data = data;
    const markup = this._generateMarkup();
    console.log(data);
    // console.log(markup);
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    console.log(this._parentElement);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
