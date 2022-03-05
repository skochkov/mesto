export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)   //Подсмотрел это решение для того чтобы закрывать на Esc. Вообще не могу понять как это работает, а главное почему без этого не работает и ошибок не выдает))
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if(evt.target.classList.contains('popup__button-close')) {
        this.close()
      }
    })
  }
}
