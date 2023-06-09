import { handleResponse } from "./utils";

class MainApi {
  constructor ({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  setHeaders = (token) => {
    this._headers =  {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  getMe = () => {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(handleResponse)
  }

  patchMe = (userData) => {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(userData)
    }) 
      .then(handleResponse)
      .then((data) => {
        return data
      })
  }

  getUsers = () => {
    return fetch(`${this._url}/users`, {
      headers: this._headers,
    })
      .then(handleResponse)
  }

  getUser = (id) => {
    return fetch(`${this._url}/users/${id}`, {
      headers: this._headers,
    })
      .then(handleResponse)
  }

  getFilms = () => {
    return fetch(`${this._url}/movies`, {
      headers: this._headers
    })
      .then(handleResponse)
  }

  createFilm = (film) => {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        "country": film.country,
        "director": film.director,
        "duration": film.duration,
        "year": film.year,
        "description": film.description,
        "image": `https://api.nomoreparties.co${film.image.url}`,
        "trailerLink": film.trailerLink,
        "thumbnail": `https://api.nomoreparties.co${film.image.formats.thumbnail.url}`,
        "movieId": film.id,
        "nameRU": film.nameRU,
        "nameEN": film.nameEN,
      })
    })
      .then(handleResponse)
  }

  deleteFilm = (id) => {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(handleResponse)
  }
}

const api = new MainApi({
  url: "https://movies.exp.nomoredomains.monster/api",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("JWT")}`
  }
});

export default api;
