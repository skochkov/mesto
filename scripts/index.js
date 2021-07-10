const popupEdit = document.querySelector('#popupEdit');
const profile = document.querySelector('.profile');
const popupButtonEdit = profile.querySelector('.profile-info__edit-button');
const popupCloseButtonEditForm = popupEdit.querySelector('.popup__button-close');
const popupImg = document.querySelector('#popupImg');

let title = document.querySelector('.profile-info__title');
let subTitle = document.querySelector('.profile-info__sub-title');

const editFormElement = popupEdit.querySelector('.popup__form');

let nameInput = editFormElement.querySelector('.popup__input_type_name');
let jobInput = editFormElement.querySelector('.popup__input_type_job');

//функция открывает/закрывает popup
function popupOpenClose (popup) {
  popup.classList.toggle('popup_opened');
}

// Функция открывает попап Edit
function popupEditOpen() {
    popupOpenClose(popupEdit);
    
    nameInput.value = title.textContent;
    jobInput.value = subTitle.textContent;
}

// Следим за событием 'click'
popupButtonEdit.addEventListener('click', popupEditOpen);
popupCloseButtonEditForm.addEventListener('click', () => { popupOpenClose(popupEdit); });

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formEditSubmitHandler (evt) {
    evt.preventDefault();

    title.textContent = nameInput.value;
    subTitle.textContent = jobInput.value;

    popupOpenClose(popupEdit);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editFormElement.addEventListener('submit', formEditSubmitHandler);



//Проектная работа №5__________________________________________________________________

//1. Добавим карточки из массива объектов
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

const elementTemplate = document.querySelector('#element').content;
const elementList = document.querySelector('.elements__list');

let imageBig = popupImg.querySelector('.popup__img');
let popupTitle = popupImg.querySelector('.popup__title');

// функция добавления модификатора класса для лайка
function handlerLike(evt) {
  let like = evt.target.closest('.element__like');
  like.classList.toggle('element__like_status_active');
}

// Функция удаления карточки
function handlerDelete(evt) {
  const itemDelete = evt.target.closest('.element');
  itemDelete.remove();
}

//функция открывает картинку на весь экран
function popupOpenImg(evt) {
  let imageSmall = evt.target.closest('.element__image');
  const element = evt.target.closest('.element');
  let text = element.querySelector('.element__title');

  imageBig.src = imageSmall.src;
  popupTitle.textContent = text.textContent;

  popupOpenClose(popupImg);
}

//Функция вешает обработчики на кнопки в карточке
function setEventListeners(contentClone) {
  contentClone.querySelector('.element__like').addEventListener('click', handlerLike);
  contentClone.querySelector('.element__trash').addEventListener('click', handlerDelete);
  contentClone.querySelector('.element__image').addEventListener('click', popupOpenImg);
}

//Функция рендерит список карточек
function renderElementsList (array) {
  for (let i = 0; i < array.length; i++) {
        
        const contentClone = elementTemplate.cloneNode(true);

        contentClone.querySelector('.element__image').src = array[i].link;
        contentClone.querySelector('.element__title').textContent = array[i].name;

        setEventListeners(contentClone);

        elementList.prepend(contentClone);
  }
}

renderElementsList(initialCards);


//2. Форма добавления карточки
const popupAdd = document.querySelector('#popupAdd');
const popupButtonAdd = profile.querySelector('.profile__add-button');
const popupCloseButtonAddForm = popupAdd.querySelector('.popup__button-close');

popupButtonAdd.addEventListener('click', () => {popupOpenClose(popupAdd)});
popupCloseButtonAddForm.addEventListener('click', () => {popupOpenClose(popupAdd)});

//3. Добавление карточки
const addFormElement = popupAdd.querySelector('.popup__form');
let placeNameInput = popupAdd.querySelector('.popup__input_type_place-name');
let linkInput = popupAdd.querySelector('.popup__input_type_link');

//Функция создания новой карточки
function createNewCard(name,link) {
  const array = [
    {
      name: name,
      link: link,
    }
  ]

  return array;
}

//обработка формы
function formAddSubmitHandler (evt) {
  evt.preventDefault();
  
  let array = createNewCard(placeNameInput.value, linkInput.value);

  renderElementsList(array);
  popupOpenClose(popupAdd);
}

// Прикрепляем обработчик к форме:
addFormElement.addEventListener('submit', formAddSubmitHandler);

//закрываем попап с картинкой
const popupImgButtonClose = popupImg.querySelector('.popup__button-close');
popupImgButtonClose.addEventListener('click', () => {popupOpenClose(popupImg)});


