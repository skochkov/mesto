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

const popupEdit = document.querySelector('#popup-edit')
const editForm = popupEdit.querySelector('.popup__form')

const popupAdd = document.querySelector('#popup-add')
const addForm = popupAdd.querySelector('.popup__form')
const elementContainer = document.querySelector('.elements__list')

const profileName = document.querySelector('.profile-info__title')
const profileInfo = document.querySelector('.profile-info__sub-title')


//Включаем валидацию форм с помощью класса FormValidator

const validationEditForm = new FormValidator(config, editForm) //просто сократил название переменной. Не до конца понял, как я должен писать здесь имя класса, если он у меня один и там и там - popup__form, для взаимозаменяемости формы.
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
        newCardCreate(cardItem, handleCardClick, '#element')
        popupFormAdd.close()
      }
})

const popupImg = new PopupWithImage('#popup-img')

const cardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
      newCardCreate(cardItem, handleCardClick, '#element')
    },
  },
  elementContainer
)


//Функции
function handleCardClick(name, link) {
  popupImg.open(name, link)
}

function newCardCreate(item, handleCardClick, template) {
  const card = new Card(item, handleCardClick, template)
  const cardElement = card.render()
  cardList.setItem(cardElement)
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
