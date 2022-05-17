export default class UserInfo {
  constructor({userName, userInfo, userAvatar}) {
    this._userName = userName
    this._userInfo = userInfo
    this._userAvatar = userAvatar
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userInfo: this._userInfo.textContent
    }
  }

  getUserId() {
    return this._userId
  }

  setUserInfo(name, about, avatar, _id) {
    this._userName.textContent = name
    this._userInfo.textContent = about
    this._userAvatar.src = avatar
    this._userId = _id
  }
}
