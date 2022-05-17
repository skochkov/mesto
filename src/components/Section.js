export default class Section {
  constructor({data, renderer}, container) {
    this._initialArray = data
    this._renderer = renderer
    this._container = container
  }

  renderItems() {
    this._initialArray.forEach(item => this._renderer(item))
  }

  setItem(element) {
    this._container.append(element)
  }

  prependItem(element) {
    this._container.prepend(element)
  }
}
