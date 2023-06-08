import { handleResponse } from "./utils";

class AuthApi {
  constructor ({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  register = (name, email, password) => {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
    .then(handleResponse)
    .then((data) => {
      return (`Пользователь с email: ${data.email} и именем: ${data.name} был успешно создан`)
    })
  }

  login = (email, password) => {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password })
    })
    .then(handleResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("JWT", data.token);
        return data;
      }
    })
  }
}

const auth = new AuthApi({
  url: "https://movies.exp.nomoredomains.monster/api",
  headers: {
    'Content-Type': 'application/json'
  },
});

export default auth;
