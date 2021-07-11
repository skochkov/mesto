//Готов исправиться. Вынесу в отдельный файл. Подскажите как и где правильно подключать такие файлы?
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];



const profile = document.querySelector('.profile');
const openProfilePopupButton = profile.querySelector('.profile-info__edit-button');
const addCardPopupButton = profile.querySelector('.profile__add-button');

const popupEdit = document.querySelector('#popup-Edit');
const editFormElement = popupEdit.querySelector('.popup__form');
const editFormPopupButtonClose = popupEdit.querySelector('.popup__button-close');
let nameInput = editFormElement.querySelector('.popup__input_type_name');
let jobInput = editFormElement.querySelector('.popup__input_type_job');

const popupAdd = document.querySelector('#popup-Add');
const addFormElement = popupAdd.querySelector('.popup__form');
const addFormPopupButtonClose = popupAdd.querySelector('.popup__button-close');
let placeNameInput = popupAdd.querySelector('.popup__input_type_place-name');
let linkInput = popupAdd.querySelector('.popup__input_type_link');

const popupImg = document.querySelector('#popup-Img');
const popupImgButtonClose = popupImg.querySelector('.popup__button-close');
let popupImgImage = popupImg.querySelector('.popup__img');
let popupImgTitle = popupImg.querySelector('.popup__title');

const userName = document.querySelector('.profile-info__title');
const userJob = document.querySelector('.profile-info__sub-title');

const elementTemplate = document.querySelector('#element').content;
const elementList = document.querySelector('.elements__list');


//функция открывает/закрывает popup
function togglePopupState (popup) {
  popup.classList.toggle('popup_opened');
}

// Функция открывает попап Edit
function popupEditOpen() {
    togglePopupState(popupEdit);
    
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

// Обработчик формы Изменения данных пользователя
function editFormSubmitHandler (evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  togglePopupState(popupEdit);
}

// функция добавления модификатора класса для лайка
function handlerLike(evt) {
  let like = evt.target;
  like.classList.toggle('element__like_status_active');
}

// Функция удаления карточки
function handlerDelete(evt) {
  const itemDelete = evt.target.closest('.element');
  itemDelete.remove();
}

//функция открывает картинку на весь экран
function popupImgOpen(evt) {
  let imageSmall = evt.target;
  const element = evt.target.closest('.element');
  let text = element.querySelector('.element__title');

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
function renderCardElement (link, name) {
  const contentClone = elementTemplate.cloneNode(true);

  contentClone.querySelector('.element__image').src = link;
  contentClone.querySelector('.element__title').textContent = name;
  // вопрос про Alt. Мне, чтобы его добавить, надо так же в массив карточек добавить ключ Alt со значениями?

  setEventListeners(contentClone);

  elementList.prepend(contentClone);
}

//обработка формы добавления карточки
function formAddSubmitHandler (evt) {
  evt.preventDefault();

  renderCardElement(linkInput.value, placeNameInput.value);
  togglePopupState(popupAdd);
}



// Следим за событием 'click'
openProfilePopupButton.addEventListener('click', popupEditOpen);
editFormPopupButtonClose.addEventListener('click', () => { togglePopupState(popupEdit); });
editFormElement.addEventListener('submit', editFormSubmitHandler);
addCardPopupButton.addEventListener('click', () => {
  togglePopupState(popupAdd);
  placeNameInput.value ='';
  linkInput.value = '';
});
addFormPopupButtonClose.addEventListener('click', () => {togglePopupState(popupAdd)});
addFormElement.addEventListener('submit', formAddSubmitHandler);
popupImgButtonClose.addEventListener('click', () => {togglePopupState(popupImg)});



//Добавляем карточки на страницу из массива
initialCards.forEach(item => renderCardElement(item.link, item.name));