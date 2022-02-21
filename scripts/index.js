import Card from './Card.js'
import {FormValidator, config} from './FormValidator.js'
import {initialCards} from './constants.js'

const profile = document.querySelector('.profile')
const openProfilePopupButton = profile.querySelector('.profile-info__edit-button')
const addCardPopupButton = profile.querySelector('.profile__add-button')

const popupEdit = document.querySelector('#popup-edit')
const editFormElement = popupEdit.querySelector('.popup__form')
const nameInput = editFormElement.querySelector('.popup__input_type_name')
const jobInput = editFormElement.querySelector('.popup__input_type_job')

const popupAdd = document.querySelector('#popup-add')
const addFormElement = popupAdd.querySelector('.popup__form')
const placeNameInput = popupAdd.querySelector('.popup__input_type_place-name')
const linkInput = popupAdd.querySelector('.popup__input_type_link')

const popupImg = document.querySelector('#popup-img')
const popupImage = popupImg.querySelector('.popup__img')
const popupTitle = popupImg.querySelector('.popup__title')

const popups = document.querySelectorAll('.popup')

const userName = document.querySelector('.profile-info__title')
const userJob = document.querySelector('.profile-info__sub-title')

const elementContainer = document.querySelector('.elements__list')

const validationEditForm = new FormValidator(config, editFormElement)
const validationAddForm = new FormValidator(config, addFormElement)


//функция открывает popup
function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupByEsc)

  // const form = popup.querySelector('.popup__form')

  // if(form) {
  //   const validationForm = new FormValidator(config, form)

  // validationForm.resetValidation()
  // }

}

//функция закрывает popup
function closePopup(popup) {
  popup.classList.remove('popup_opened')

  document.removeEventListener('keydown', closePopupByEsc)
}

//Функция закрывает popup на Esc
function closePopupByEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

// Функция открывает попап Edit
function openEditPopup() {
    openPopup(popupEdit)
    validationEditForm.resetValidation()

    nameInput.value = userName.textContent
    jobInput.value = userJob.textContent
}

// Обработчик формы Изменения данных пользователя
function editFormSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value
  userJob.textContent = jobInput.value

  closePopup(popupEdit)
}

//функция создания карточки
function createCard(item) {
  const card = new Card(item.name, item.link, '#element')
  const cardElement = card.render()
  return cardElement
}

//обработка формы добавления карточки с помощью ООП
function addFormSubmitHandler(evt) {
  evt.preventDefault()

  const inputs = [
    {
      name: placeNameInput.value,
      link: linkInput.value,
    }
  ]

  inputs.forEach(item => elementContainer.prepend(createCard(item)))

  closePopup(popupAdd);
}



// Следим за событием 'click'
openProfilePopupButton.addEventListener('click', openEditPopup)

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if(evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
})

editFormElement.addEventListener('submit', editFormSubmitHandler)
addCardPopupButton.addEventListener('click', () => {
  openPopup(popupAdd)
  validationAddForm.resetValidation()
  addFormElement.reset()
})

addFormElement.addEventListener('submit', addFormSubmitHandler)



//Добавляем карточки на страницу из массива с помощью Класса Card
initialCards.forEach(item => {
  // const card = new Card(item.name, item.link, '#element')
  // const cardElement = card.render()


  elementContainer.prepend(createCard(item))
})

//Включаем валидацию форм с помощью класса FormValidator

validationEditForm.enableValidation()
validationAddForm.enableValidation()

export {openPopup, popupImg, popupImage, popupTitle}
