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
  ]

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_state_error',
  errorClass: 'popup__input-error_active',
 }

const token = 'b18f91bc-91b0-4a91-a711-318fa430706a'
const requestUrl = 'https://nomoreparties.co/v1/cohort36/'

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

export {initialCards, config, token, requestUrl, editButton, addButton, editForm, nameInput, infoInput, addForm, elementContainer, avatarForm,
profileName, profileInfo, profileAvatar, avatarButton}
