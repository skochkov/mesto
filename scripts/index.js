import Card from './Card.js';
import {FormValidator, config} from './FormValidator.js';
import {initialCards, popupImg} from './constants.js';

const profile = document.querySelector('.profile');
const openProfilePopupButton = profile.querySelector('.profile-info__edit-button');
const addCardPopupButton = profile.querySelector('.profile__add-button');

const popupEdit = document.querySelector('#popup-edit');
const editFormElement = popupEdit.querySelector('.popup__form');
const editFormPopupButtonClose = popupEdit.querySelector('.popup__button-close');
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector('.popup__input_type_job');

const popupAdd = document.querySelector('#popup-add');
const addFormElement = popupAdd.querySelector('.popup__form');
const addFormPopupButtonClose = popupAdd.querySelector('.popup__button-close');
const placeNameInput = popupAdd.querySelector('.popup__input_type_place-name');
const linkInput = popupAdd.querySelector('.popup__input_type_link');

const userName = document.querySelector('.profile-info__title');
const userJob = document.querySelector('.profile-info__sub-title');

const elementTemplate = document.querySelector('#element').content;
const elementContainer = document.querySelector('.elements__list');
const formList = Array.from(document.querySelectorAll(config.formSelector));



//функция открывает popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByButtonEsc);
  document.addEventListener('click', closePopupByClickOnOverlay);
}

//функция закрывает popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByButtonEsc);
  document.removeEventListener('click', closePopupByClickOnOverlay);
}

//функция закрывает popup кликом на overlay
  function closePopupByClickOnOverlay(evt) {
  if(evt.target.classList.contains('popup')) {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

//функция закрывает popup кликом на Esc
  function closePopupByButtonEsc(evt) {
  const openPopup = document.querySelector('.popup_opened');

  if(evt.key === 'Escape' && openPopup) {
    closePopup(openPopup);
  }
}


// Функция открывает попап Edit
function openEditPopup() {
    openPopup(popupEdit);

    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

// Обработчик формы Изменения данных пользователя
function editFormSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  closePopup(popupEdit);
}

// функция добавления модификатора класса для лайка
function handlerLike(evt) {
  const like = evt.target;
  like.classList.toggle('element__like_status_active');
}

// Функция удаления карточки
function handlerDelete(evt) {
  const cardDelete = evt.target.closest('.element');
  cardDelete.remove();
}

//Функция вешает обработчики на кнопки в карточке
function setCardEventListeners(contentClone) {
  contentClone.querySelector('.element__like').addEventListener('click', handlerLike);
  contentClone.querySelector('.element__trash').addEventListener('click', handlerDelete);
  //contentClone.querySelector('.element__image').addEventListener('click', popupImgOpen);


}// Реализовать добавление новой карточки через ООП!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//Функция рендерит карточку
function renderCardElement(link, name) {
  const contentClone = elementTemplate.cloneNode(true);

  contentClone.querySelector('.element__image').src = link;
  contentClone.querySelector('.element__image').alt = name;
  contentClone.querySelector('.element__title').textContent = name;

  setCardEventListeners(contentClone);

  return contentClone;
}

// //функия добавления карточки
function addCard(container, cardElement) {
  container.prepend(cardElement);
}

//Функция Блокировки кнопки
function blockButton(evt) {
  evt.submitter.setAttribute('disabled', true)
}

//обработка формы добавления карточки
function formAddSubmitHandler(evt) {
  evt.preventDefault();

  addCard(elementContainer, renderCardElement(linkInput.value, placeNameInput.value));
  //blockButton(evt);
  closePopup(popupAdd);
}



// Следим за событием 'click'
openProfilePopupButton.addEventListener('click', openEditPopup);
editFormPopupButtonClose.addEventListener('click', () => { closePopup(popupEdit); });
editFormElement.addEventListener('submit', editFormSubmitHandler);
addCardPopupButton.addEventListener('click', () => {
  openPopup(popupAdd);
  addFormElement.reset();
});
addFormPopupButtonClose.addEventListener('click', () => {closePopup(popupAdd)});
addFormElement.addEventListener('submit', formAddSubmitHandler);


//Добавляем карточки на страницу из массива с помощью Класса Card
initialCards.forEach(item => {
  const card = new Card(item.name, item.link, '#element')
  const cardElement = card.render()
  elementContainer.prepend(cardElement)
})

//Включаем валидацию форм

const validationEditForm = new FormValidator(config, editFormElement)
const validationAddForm = new FormValidator(config, addFormElement)

validationEditForm.enableValidation()
validationAddForm.enableValidation()
