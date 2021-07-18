const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_state_error',
    errorClass: 'popup__input-error_active',
  }


const showMessageError = (inputElement, errorMessage) => {
    const errorElement = inputElement.closest('.popup__section').querySelector('.popup__input-error');
    
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
}

const hideMessageError = (inputElement) => {
    const errorElement = inputElement.closest('.popup__section').querySelector('.popup__input-error');

    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass);
    inputElement.classList.remove(config.inputErrorClass);
}

const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some((inputElement) => !inputElement.validity.valid) 

    if(hasNotValidInput) {
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.removeAttribute('disabled', true);
    }
}

const checkInputValidity = (inputElement) => {
    const isInputElementValid = inputElement.validity.valid;
    const errorMessage = inputElement.validationMessage;
    
    if(!isInputElementValid) {
        showMessageError(inputElement, errorMessage)
    } else {
        hideMessageError(inputElement)
    }
} 

const setFormEventListeners = (formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })

    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', (evt) => {
            checkInputValidity(inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })

    toggleButtonState(inputList, buttonElement);
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach(setFormEventListeners);
}


enableValidation(config);