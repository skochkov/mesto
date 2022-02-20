const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_state_error',
    errorClass: 'popup__input-error_active',
  }

class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector
        this._inputSelector = config.inputSelector
        this._submitButtonSelector = config.submitButtonSelector
        this._inactiveButtonClass = config.inactiveButtonClass
        this._inputErrorClass = config.inputErrorClass
        this._errorClass = config.errorClass

        this._form = form

        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);

    }

    resetValidation() {
      this._toggleButtonState()
      this._inputList.forEach(inputElement => this._hideMessageError(inputElement))
    }

    _setInputEventListeners() {
      this._inputList.forEach(inputElement => {
        inputElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
          })
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement)
          this._toggleButtonState()
        })

      })

    }

    _checkInputValidity(inputElement) {
      const isInputElementValid = inputElement.validity.valid
      const errorMessage = inputElement.validationMessage
      if(!isInputElementValid) {
          this._showMessageError(inputElement, errorMessage)
      } else {
          this._hideMessageError(inputElement)
      }
    }

    _toggleButtonState() {
      const hasNotValidInput = this._inputList.some((inputElement) => !inputElement.validity.valid)


      if(hasNotValidInput) {
        this._buttonElement.classList.add(this._inactiveButtonClass)
        this._buttonElement.setAttribute('disabled', true);
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass)
        this._buttonElement.removeAttribute('disabled', true);
      }
    }

    _showMessageError(inputElement, errorMessage) {
      const errorElement = inputElement.closest('.popup__section').querySelector('.popup__input-error')

      errorElement.textContent = errorMessage
      errorElement.classList.add(this._errorClass)
      inputElement.classList.add(this._inputErrorClass)
    }

    _hideMessageError(inputElement) {
      const errorElement = inputElement.closest('.popup__section').querySelector('.popup__input-error')

      errorElement.textContent = ''
      errorElement.classList.remove(this._errorClass)
      inputElement.classList.remove(this._inputErrorClass)
    }

    enableValidation() {
      this._setInputEventListeners()
    }
}


export {FormValidator, config}
