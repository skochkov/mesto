(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=function(){u._element=u._getTemplate(),u._setEventListeners();var e=u._element.querySelector(".element__image");return e.src=u._image,e.alt=u._title,u._element.querySelector(".element__title").textContent=u._title,u._element},(o="render")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._title=e.name,this._image=e.link,this._handleCardCkick=n,this._template=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handlerDelete()})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._handlerLike()})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardCkick(e._title,e._image)}))}},{key:"_handlerDelete",value:function(){this._element.remove(),this._element=null}},{key:"_handlerLike",value:function(){this._element.querySelector(".element__like").classList.toggle("element__like_status_active")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=document.querySelector(n),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){return e._hideMessageError(t)}))}},{key:"_setInputEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){var t=e.validity.valid,n=e.validationMessage;t?this._hideMessageError(e):this._showMessageError(e,n)}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_showMessageError",value:function(e,t){var n=e.closest(".popup__section").querySelector(".popup__input-error");n.textContent=t,n.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideMessageError",value:function(e){var t=e.closest(".popup__section").querySelector(".popup__input-error");t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"enableValidation",value:function(){this._setInputEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){return e._renderer(t)}))}},{key:"setItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__button-close")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function _(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t,n=e.popupSelector,r=e.handlerFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handlerFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputs=Array.from(t._form.querySelectorAll(".popup__input")),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputs.forEach((function(t){return e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;c(y(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handlerFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){c(y(u.prototype),"close",this).call(this),this._form.reset()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__img"),t._popupTitle=t._popup.querySelector(".popup__title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImg.src=t,this._popupImg.alt=e,this._popupTitle.textContent=e,v(w(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.userName,r=t.userInfo;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userInfo=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userInfo:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userInfo.textContent=e.job}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_state_error",errorClass:"popup__input-error_active"};function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.requestUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._requestUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._requestUrl,"users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=document.querySelector(".profile-info__edit-button"),q=document.querySelector(".profile__add-button"),I=document.querySelector(".popup__input_type_name"),x=document.querySelector(".popup__input_type_job"),R=document.querySelector(".elements__list"),T=document.querySelector(".profile-info__title"),B=document.querySelector(".profile-info__sub-title"),V=new r(O,".popup_edit_profile");V.enableValidation();var U=new r(O,".popup_add_card");U.enableValidation(),new L({requestUrl:"https://nomoreparties.co/v1/cohort36/",headers:{authorization:"b18f91bc-91b0-4a91-a711-318fa430706a","Content-Type":"application/json"}}).getUserInfo();var A=new j({userName:T,userInfo:B}),N=new h({popupSelector:"#popup-edit",handlerFormSubmit:function(e){A.setUserInfo(e),N.close()}}),D=new h({popupSelector:"#popup-add",handlerFormSubmit:function(e){F.setItem(G(e)),D.close()}}),M=new E("#popup-img"),F=new i({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){F.setItem(G(e))}},R);function z(e,t){M.open(e,t)}function G(e){return new t(e,z,"#element").render()}N.setEventListeners(),D.setEventListeners(),M.setEventListeners(),P.addEventListener("click",(function(){var e=A.getUserInfo();I.value=e.userName,x.value=e.userInfo,V.resetValidation(),N.open()})),q.addEventListener("click",(function(){U.resetValidation(),D.open()})),F.renderItems()})();