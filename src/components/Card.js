export default class Card {

  constructor({data, handleCardClick, handleCardDelete, handleCardLike}, currentUserId, template) {
    this._title = data.name
    this._image = data.link
    this._likes = data.likes
    this._ownerId = data.owner._id
    this._cardId = data._id
    this._handleCardCkick = handleCardClick
    this._handleCardDelete = handleCardDelete
    this._handleCardLike = handleCardLike
    this._currentId = currentUserId
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

  _getView() {
    if (this._ownerId === this._currentId) {
      this._element.querySelector('.element__trash').classList.add('element__trash_show')
    }
  }

  _setEventListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleCardDelete()
    })
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleCardLike()
    })
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardCkick(this._title, this._image)
    })
  }

  handlerDelete() {
    this._element.remove()
    this._element = null
  }

  setLike(data) {
    this._isLiked = data.likes.filter((item) => {return item._id == this._currentId}).length > 0
    this._likeCounter.textContent = data.likes.length
    if (this._isLiked) {
      this._like.classList.add('element__like_status_active')
    } else {
      this._like.classList.remove('element__like_status_active')
    }
  }

  isLiked() {
    return this._isLiked
  }

  id() {
    return this._cardId
  }

  render = () => {
    this._element = this._getTemplate()
    this._like = this._element.querySelector('.element__like')
    this._likeCounter = this._element.querySelector('.element__like-counter')
    this._setEventListeners()

    const elementImage = this._element.querySelector('.element__image')

    elementImage.src = this._image
    elementImage.alt = this._title
    this._element.querySelector('.element__title').textContent = this._title
    this._likeCounter.textContent = this._likes.length
    this._getView()

    return this._element
  }
}
