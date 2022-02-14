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



// class FormValidtor {
  // constructor (config, form) {
  //   this._inputSelector = config.inputSelector;
  //   this._submitButtonSelector = config.submitButtonSelector;
  //   this._inactiveButtonClass = config.inactiveButtonClass;
  //   this._inputErrorClass = config.inputErrorClass;
  //   this._errorClass = config.errorClass;
  //   this._form = form;
  //   this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  //   this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  //   this._errorFields = Array.from(document.querySelectorAll(`.${this._inputErrorClass}`));
  // }

//   checkValidity(inputElement) {
//     const form = this._form;
//     if (!inputElement.validity.valid) {
//       const errorElement = form.querySelector(`.${inputElement.id}-error`);
//       errorElement.classList.add(this._errorClass);
//       errorElement.textContent = inputElement.validationMessage;
//     } else {
//       const errorElement = form.querySelector(`.${inputElement.id}-error`);
//       errorElement.classList.remove(this._errorClass);
//       errorElement.textContent = '';
//     }
//   }

//   _hasInvalidInput() {
//     return this._inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     })
//   }

//   toggleButtonState() {
//     if (this._hasInvalidInput()) {
//       this._buttonElement.classList.add(this._inactiveButtonClass);
//       this._buttonElement.setAttribute('disabled', true);
//     } else {
//       this._buttonElement.classList.remove(this._inactiveButtonClass);
//       this._buttonElement.removeAttribute('disabled');
//     }
//   }

//   _setEventListeners() {
//     this._inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       this.checkValidity(inputElement);
//       this.toggleButtonState();
//     })
//   })
//   }

//   _handleFormInput() {
//     this._form.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     })
//     this._setEventListeners();
//   }

//   errorCleaner() {
//     this._errorFields.forEach((errorField) => {
//       errorField.classList.remove(`.${this._errorClass}`);
//       errorField.textContent = '';
//     })
//   // }


//   enableValidation() {
//     this._handleFormInput();
//   }
// }
