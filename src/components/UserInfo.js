export default class UserInfo {
  constructor({userName, userInf}) {
    this._userName = document.querySelector(userName)
    this._userInf = document.querySelector(userInf)
  }

  getUserInfo() {
    return {
      usr: this._userName.textContent,
      inf: this._userInf.textContent
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.usr
    this._userInf.textContent = data.inf
  }
}
