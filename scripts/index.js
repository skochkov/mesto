let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupEditButton = document.querySelector('.profile-info__edit-button');

let title = document.querySelector('.profile-info__title');
let subTitle = document.querySelector('.profile-info__sub-title');

let formElement = document.querySelector('.popup__form');

let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');

// Функция открывает попап
function popupOpen() {
    popup.classList.add('popup_opened');
    
    nameInput.value = title.textContent;
    jobInput.value = subTitle.textContent;
}

// Функция закрывает попап
function popupClose() {
    popup.classList.remove('popup_opened');
}

// Следим за событием 'click'
popupEditButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    

    title.textContent = nameInput.value;
    subTitle.textContent = jobInput.value;

    popupClose();

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);