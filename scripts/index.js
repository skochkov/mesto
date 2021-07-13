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

const popupImg = document.querySelector('#popup-img');
const popupImgButtonClose = popupImg.querySelector('.popup__button-close');
const popupImgImage = popupImg.querySelector('.popup__img');
const popupImgTitle = popupImg.querySelector('.popup__title');

const userName = document.querySelector('.profile-info__title');
const userJob = document.querySelector('.profile-info__sub-title');

const elementTemplate = document.querySelector('#element').content;
const elementContainer = document.querySelector('.elements__list');


//функция открывает/закрывает popup
function togglePopupState(popup) {
  popup.classList.toggle('popup_opened');
}

// Функция открывает попап Edit
function openEditPopup() {
    togglePopupState(popupEdit);
    
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

// Обработчик формы Изменения данных пользователя
function editFormSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  togglePopupState(popupEdit);
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

//функция открывает картинку на весь экран
function popupImgOpen(evt) {
  const imageSmall = evt.target;
  const cardElement = evt.target.closest('.element');
  const text = cardElement.querySelector('.element__title');

  popupImgImage.src = imageSmall.src;
  popupImgImage.alt = imageSmall.alt;
  popupImgTitle.textContent = text.textContent;

  togglePopupState(popupImg);
}

//Функция вешает обработчики на кнопки в карточке
function setEventListeners(contentClone) {
  contentClone.querySelector('.element__like').addEventListener('click', handlerLike);
  contentClone.querySelector('.element__trash').addEventListener('click', handlerDelete);
  contentClone.querySelector('.element__image').addEventListener('click', popupImgOpen);
}

//Функция рендерит карточку
function renderCardElement(link, name) {
  const contentClone = elementTemplate.cloneNode(true);

  contentClone.querySelector('.element__image').src = link;
  contentClone.querySelector('.element__image').alt = name;
  contentClone.querySelector('.element__title').textContent = name;

  setEventListeners(contentClone);

  elementContainer.prepend(contentClone);
}

//обработка формы добавления карточки
function formAddSubmitHandler(evt) {
  evt.preventDefault();

  renderCardElement(linkInput.value, placeNameInput.value);
  togglePopupState(popupAdd);
}



// Следим за событием 'click'
openProfilePopupButton.addEventListener('click', openEditPopup);
editFormPopupButtonClose.addEventListener('click', () => { togglePopupState(popupEdit); });
editFormElement.addEventListener('submit', editFormSubmitHandler);
addCardPopupButton.addEventListener('click', () => {
  togglePopupState(popupAdd);
  addFormElement.reset();
});
addFormPopupButtonClose.addEventListener('click', () => {togglePopupState(popupAdd)});
addFormElement.addEventListener('submit', formAddSubmitHandler);
popupImgButtonClose.addEventListener('click', () => {togglePopupState(popupImg)});



//Добавляем карточки на страницу из массива
initialCards.forEach(item => renderCardElement(item.link, item.name));