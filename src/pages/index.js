import './index.css'
import Card from '../components/Card.js'
import {FormValidator, config} from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'
import {initialCards,} from '../utils/constants.js'

const editButton = document.querySelector('.profile-info__edit-button')
const addButton = document.querySelector('.profile__add-button')

const popupEdit = document.querySelector('#popup-edit')
const editFormElement = popupEdit.querySelector('.popup__form')

const popupAdd = document.querySelector('#popup-add')
const addFormElement = popupAdd.querySelector('.popup__form')
const elementContainer = document.querySelector('.elements__list')



//Включаем валидацию форм с помощью класса FormValidator

const validationEditForm = new FormValidator(config, editFormElement)
validationEditForm.enableValidation()
const validationAddForm = new FormValidator(config, addFormElement)
validationAddForm.enableValidation()

//Создание экземпляров классов

const user = new UserInfo(
  {
   userName: '.popup__input_type_name',
   userInf: '.popup__input_type_job'
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
          const card = new Card(cardItem, handleCardClick, '#element')
          const cardElement = card.render()
          cardList.setItem(cardElement)
          popupFormAdd.close()
      }
})

const popupImg = new PopupWithImage('#popup-img')

const cardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
      const card = new Card(cardItem, handleCardClick, '#element')
      const cardElement = card.render()
      cardList.setItem(cardElement)
    },
  },
  elementContainer
)

//Функции
function handleCardClick(name, link) {
  popupImg.open(name, link)
}

//Добавляем слушателей

popupFormEdit.setEventListeners()
popupFormAdd.setEventListeners()
popupImg.setEventListeners()


// Следим за событием 'click'

editButton.addEventListener('click', () => {
  const userInfo = user.getUserInfo()

  validationEditForm.resetValidation()
  popupFormEdit.open()
})

addButton.addEventListener('click', () => {
  validationAddForm.resetValidation()
  popupFormAdd.open()
})


//Добавляем карточки на страницу из массива с помощью Класса Section и Card

cardList.renderItems()
