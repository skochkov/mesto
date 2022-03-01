export default class Card {

    constructor(data, handleCardClick, template) {
      this._title = data.name
      this._image = data.link
      this._handleCardCkick = handleCardClick
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
            this._handleCardCkick(this._title, this._image)
        })
    }

    _handlerDelete() {
        this._element.remove();
      }

    _handlerLike() {
        const like = this._element.querySelector('.element__like')
        like.classList.toggle('element__like_status_active')
      }

    render = () => {
        this._element = this._getTemplate()
        this._setEventListeners()

        const elementImage = this._element.querySelector('.element__image')

        elementImage.src = this._image
        elementImage.alt = this._title
        this._element.querySelector('.element__title').textContent = this._title

        return this._element
    }
  }
