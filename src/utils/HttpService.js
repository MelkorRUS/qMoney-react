import axios from 'axios';
import AuthService from './AuthService'

export default class HttpService {
  get(url) {
    return axios.get(url, { headers: {'Authorization': AuthService.getToken()} })
  }
  post(url, data) {

  }
}
