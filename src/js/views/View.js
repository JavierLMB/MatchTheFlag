export default class View {
  _data;

  render(data) {
    if (!data) return console.log("error"); // Make a better guardclause

    this._data = data;
    const markupFlags = this._generateMarkupFlags();
    const markupNames = this._generateMarkupNames();

    this._clear();
    this._parentName.insertAdjacentHTML("afterbegin", markupNames);
    this._parentFlag.insertAdjacentHTML("afterbegin", markupFlags);
  }

  _clear() {
    this._parentFlag.innerHTML = "";
    this._parentName.innerHTML = "";
  }
}
