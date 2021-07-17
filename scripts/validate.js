const showMessageError = (inputElement, errorMessage) => {
    const errorElement = inputElement.closest('.popup__section').querySelector('.popup__input-error');
    
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
    inputElement.classList.add('popup__input_state_error');
}

const hideMessageError = (inputElement) => {
    const errorElement = inputElement.closest('.popup__section').querySelector('.popup__input-error');

    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');
    inputElement.classList.remove('popup__input_state_error');
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

    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button-save');

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', (evt) => {
            checkInputValidity(inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })

    toggleButtonState(inputList, buttonElement);
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach(setFormEventListeners);
}


enableValidation();