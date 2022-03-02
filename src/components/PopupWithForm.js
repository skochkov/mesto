import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handlerFormSubmit}) {
    super(popupSelector)
    this._handlerFormSubmit = handlerFormSubmit
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
  }

  _getInputValues() {
    this._inputsValues = {}

    this._inputs.forEach(item => this._inputsValues[item.name] = item.value)

    return this._inputsValues
  }

  setEventListeners() {
    super.setEventListeners()

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()

      this._handlerFormSubmit(this._getInputValues())
    })
  }

  close() {
    super.close()

    this._form.reset()
  }
}
