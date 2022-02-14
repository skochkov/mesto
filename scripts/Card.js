import {popupImg as popup, popupImgButtonClose} from './constants.js';

export default class Card {

    constructor(title, image, template) {
      this._title = title
      this._image = image
      this._template = template
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._template)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return cardElement

    }

    _setEventListeners() {
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._handlerDelete()
        })
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handlerLike()
        })
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handlerImageOpen()
        })
    }

    _handlerDelete() {
        this._element.remove();
      }

    _handlerLike() {
        const like = this._element.querySelector('.element__like')
        like.classList.toggle('element__like_status_active')
      }

    _handlerImageOpen() {
        const popupImage = popup.querySelector('.popup__img')
        const popupTitle = popup.querySelector('.popup__title')

        popupImage.src = this._image
        popupTitle.textContent = this._title

        popup.classList.add('popup_opened')

        popupImgButtonClose.addEventListener('click', () => this._handlerImageClose())
      }

    _handlerImageClose() {
        popup.classList.remove('popup_opened')
      }

    render = () => {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__title').textContent = this._title;

        return this._element
    }
  }
