import axios from 'axios';

import config from './Config'

export default class AuthService {
  constructor() {
    this.token = null
  }

  _setToken(token) {
    this.token = token
    localStorage.setItem('auth_token', token)
  }

  getToken() {
    return localStorage.getItem('auth_token')
  }

  loggedIn() {
    return !!this.getToken()
  }

  login(login, password) {
    let self = this
    axios.post(config.apiUrl + '/sessions/signin', {login, pass: password}).then((res) => {
      self._setToken(res.message.token)
    })
  }
}
