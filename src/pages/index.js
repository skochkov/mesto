import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'
import {config, token, requestUrl, editButton, addButton, editForm, nameInput, infoInput, addForm, elementContainer, avatarForm,
  profileName, profileInfo, profileAvatar, avatarButton} from '../utils/constants.js'
import Api from '../components/Api'
import PopupWithSubmit from '../components/PopupWithSubmit'

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

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    user.setUserInfo(userData.name, userData.about, userData.avatar, userData._id)
    currentUserId = user.getUserId()
    cardList.renderItems(cards)
  })
  .catch((err) => {
    console.log(err)
  })


//Создание экземпляров классов

const user = new UserInfo(
  {
   userName: profileName,
   userInfo: profileInfo,
   userAvatar: profileAvatar
  }
)

const cardList = new Section({
  data: {},
  renderer: (cardItem) => {
    cardList.setItem(createCard(cardItem))
  }
},
elementContainer
)

const popupFormEdit = new PopupWithForm({
  popupSelector: '#popup-edit',
  handlerFormSubmit: (item) => {
    popupFormEdit.loading(true)
      api.setUserInfo(item)
      .then(data => {
        user.setUserInfo(data.name, data.about, data.avatar, data._id)

        popupFormEdit.close()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupFormEdit.loading(false)
    })
  }
})

const popupFormAdd = new PopupWithForm({
      popupSelector: '#popup-add',
      handlerFormSubmit: (cardItem) => {
        popupFormAdd.loading(true)
        api.createCard(cardItem)
        .then(data => {
          const newCard = createCard(data)

          cardList.prependItem(newCard)

          popupFormAdd.close()
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          popupFormAdd.loading(false)
        })
      }
    })

const popupFormAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handlerFormSubmit: ({link}) => {
    popupFormAvatar.loading(true)
    api.setAvatar({avatar: link})
      .then((data) => {
        user.setUserInfo(data.name, data.about, data.avatar, data._id)

        popupFormAvatar.close()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupFormAvatar.loading(false)
    })
  }
})

const popupImg = new PopupWithImage('#popup-img')

const popupDelete = new PopupWithSubmit('.popup_confirm')


//Функции
function handleCardClick(name, link) {
  popupImg.open(name, link)
}

function handleCardDelete(card) {
  popupDelete.open()
  popupDelete.setFormSubmitHandler(() => {
    api.deleteCard(card.id())
    .then((data) => {
      card.handlerDelete(data)

      popupDelete.close()
    })
    .catch((err) => {
      console.log(err)
    })
  })
}

function handleCardLike(card) {
  const promise = card.isLiked()
   ? api.dislikeCard(card.id())
   : api.likeCard(card.id())
  promise
    .then((data) => {
        card.setLike(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

function createCard(cardItem) {
  const card = new Card({
    data: cardItem,
    handleCardClick: handleCardClick,
    handleCardDelete: () => handleCardDelete(card),
    handleCardLike: () => handleCardLike(card)
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
