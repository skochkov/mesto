export default class Api {
  constructor({requestUrl, headers}) {
    this._requestUrl = requestUrl
    this._headers = headers
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json()
    } else{
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }

  getUserInfo() {
    return fetch(`${this._requestUrl}users/me`, {
        headers: this._headers
      })
    .then(this._checkResponse)
  }

  getCards() {
    return fetch(`${this._requestUrl}cards`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  setUserInfo(data) {
    return fetch(`${this._requestUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(this._checkResponse)
  }

  createCard({name, link}) {
    return fetch(`${this._requestUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._requestUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  likeCard(cardId) {
    return fetch(`${this._requestUrl}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  dislikeCard(cardId) {
    return fetch(`${this._requestUrl}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  setAvatar({avatar}) {
    return fetch(`${this._requestUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    .then(this._checkResponse)
  }
}
