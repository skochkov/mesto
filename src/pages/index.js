import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'
import {initialCards, config, token, requestUrl} from '../utils/constants.js'
import Api from '../components/Api'
import PopupWithSubmit from '../components/PopupWithSubmit'


const editButton = document.querySelector('.profile-info__edit-button')
const addButton = document.querySelector('.profile__add-button')

const editForm = '.popup_edit_profile'
const nameInput = document.querySelector('.popup__input_type_name')
const infoInput = document.querySelector('.popup__input_type_job')

const addForm = '.popup_add_card'
const elementContainer = document.querySelector('.elements__list')

const avatarForm = '.popup_avatar'

const profileName = document.querySelector('.profile-info__title')
const profileInfo = document.querySelector('.profile-info__sub-title')
const profileAvatar = document.querySelector('.profile__avatar')
const avatarButton = document.querySelector('.profile__avatar-button')

let currentUserId = null


//Включаем валидацию форм с помощью класса FormValidator

const validationEditForm = new FormValidator(config, editForm)
validationEditForm.enableValidation()
const validationAddForm = new FormValidator(config, addForm)
validationAddForm.enableValidation()
const validationAvatarForm = new FormValidator(config, avatarForm)
validationAvatarForm.enableValidation()

//API
const api = new Api({
  requestUrl: requestUrl,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
})

api.getUserInfo()
  .then(data => {
    profileName.textContent = data.name
    profileInfo.textContent = data.about
    profileAvatar.src = data.avatar
    currentUserId = data._id
  })

api.getCards()
.then(data => {
  const cardList = new Section({
    data: data,
    renderer: (cardItem) => {
      cardList.setItem(newCardCreate(cardItem))
      },
    },
    elementContainer
  )
  cardList.renderItems()
})


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
      api.setUserInfo(item)
      api.getUserInfo()
      .then(data => {
        profileName.textContent = data.name
        profileInfo.textContent = data.about
        // profileAvatar.src = data.avatar
      })

      popupFormEdit.close()
  }
})

const popupFormAdd = new PopupWithForm({
      popupSelector: '#popup-add',
      handlerFormSubmit: (cardItem) => {
        api.createCard(cardItem)
        .then(data => {
          const newCard = newCardCreate(data)
          elementContainer.prepend(newCard)
        })

        popupFormAdd.close()
      }
})

const popupFormAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handlerFormSubmit: ({link}) => {
    popupFormAvatar.loading(true)
    api.setAvatar({avatar: link})
      .then((data) => {
        profileAvatar.src = data.avatar
      })
      .finally(() => {
        popupFormAvatar.loading(false)
        popupFormAvatar.close()
    })
  }
})

const popupImg = new PopupWithImage('#popup-img')

const popupDelete = new PopupWithSubmit('.popup_confirm')


//Функции
function handleCardClick(name, link) {
  popupImg.open(name, link)
}

function handleCardDelete(card, cardItem) {
  popupDelete.setFormSubmitHandler(() => {
    api.deleteCard(cardItem._id)
    .then(() => {
      card.handlerDelete()

      popupDelete.close()
    })
    .catch((err) => {
      console.log(err)
    })
  })
  popupDelete.open()
}

function handleCardLike(card, cardItem) {
  const promise = card.isLiked()
   ? api.dislikeCard(cardItem._id)
   : api.likeCard(cardItem._id)
  promise
    .then((data) => {
        card.setLike(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

function newCardCreate(cardItem) {
  const card = new Card(cardItem, handleCardClick, {
    handleCardDelete: () => handleCardDelete(card, cardItem),
    handleCardLike: () => handleCardLike(card, cardItem)
    },
    currentUserId,
    '#element')
  return card.render()
}


//Добавляем слушателей

popupFormEdit.setEventListeners()
popupFormAdd.setEventListeners()
popupFormAvatar.setEventListeners()
popupImg.setEventListeners()
popupDelete.setEventListeners()


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

avatarButton.addEventListener('click', () => {
  validationAvatarForm.resetValidation()
  popupFormAvatar.open()
})
