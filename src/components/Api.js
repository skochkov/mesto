export default class Api {
  constructor({requestUrl, headers}) {
    this._requestUrl = requestUrl
    this._headers = headers
  }

  getUserInfo() {
    return fetch(`${this._requestUrl}users/me`, {
        headers: this._headers
      })
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getCards() {
    return fetch(`${this._requestUrl}cards`, {
      headers: this._headers
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .catch((err) => {
      console.log(err)
    })
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
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .catch((err) => {
      console.log(err)
    })
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
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._requestUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  likeCard(cardId) {
    return fetch(`${this._requestUrl}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  dislikeCard(cardId) {
    return fetch(`${this._requestUrl}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  setAvatar({avatar}) {
    return fetch(`${this._requestUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}
