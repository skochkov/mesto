import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'
import {initialCards, config} from '../utils/constants.js'


const editButton = document.querySelector('.profile-info__edit-button')
const addButton = document.querySelector('.profile__add-button')

// const popupEdit = document.querySelector('#popup-edit')
const editForm = document.querySelector('.popup__form_edit_profile')
const nameInput = editForm.querySelector('.popup__input_type_name')
const infoInput = editForm.querySelector('.popup__input_type_job')

// const popupAdd = document.querySelector('#popup-add')
const addForm = document.querySelector('.popup__form_add_card')
const elementContainer = document.querySelector('.elements__list')

const profileName = document.querySelector('.profile-info__title')
const profileInfo = document.querySelector('.profile-info__sub-title')


//Включаем валидацию форм с помощью класса FormValidator

const validationEditForm = new FormValidator(config, editForm)
validationEditForm.enableValidation()
const validationAddForm = new FormValidator(config, addForm)
validationAddForm.enableValidation()


//Создание экземпляров классов

const user = new UserInfo(
  {
   userName: profileName,
   userInfo: profileInfo
  }
)

const popupFormEdit = new PopupWithForm({
  popupSelector: '#popup-edit',
  handlerFormSubmit: (item) => {
      user.setUserInfo(item)
      popupFormEdit.close()
  }
})

const popupFormAdd = new PopupWithForm({
      popupSelector: '#popup-add',
      handlerFormSubmit: (cardItem) => {
        cardList.setItem(newCardCreate(cardItem))
        popupFormAdd.close()
      }
})

const popupImg = new PopupWithImage('#popup-img')

const cardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    cardList.setItem(newCardCreate(cardItem))
    },
  },
  elementContainer
)


//Функции
function handleCardClick(name, link) {
  popupImg.open(name, link)
}

function newCardCreate(cardItem) {
  const card = new Card(cardItem, handleCardClick, '#element')
  return card.render()
}


//Добавляем слушателей

popupFormEdit.setEventListeners()
popupFormAdd.setEventListeners()
popupImg.setEventListeners()


// Следим за событием 'click'

editButton.addEventListener('click', () => {
  const userInfo = user.getUserInfo()

  nameInput.value = userInfo.userName
  infoInput.value = userInfo.userInfo

  validationEditForm.resetValidation()
  popupFormEdit.open()
})

addButton.addEventListener('click', () => {
  validationAddForm.resetValidation()
  popupFormAdd.open()
})


//Добавляем карточки на страницу из массива с помощью Класса Section и Card

cardList.renderItems()
