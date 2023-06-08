import { handleResponse } from "./utils";

class AuthApi {
  constructor ({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  register = (userData) => {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(userData)
    })
    .then(handleResponse)
  }

  login = (userData) => {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(userData)
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
