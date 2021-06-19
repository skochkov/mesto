// console.log('Привет');

let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupEditButton = document.querySelector('.profile-info__edit-button');

function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

popupEditButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__about-me');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    document.querySelector('.profile-info__title').textContent = nameInput.value;
    document.querySelector('.profile-info__sub-title').textContent = jobInput.value;

    popupClose();

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);