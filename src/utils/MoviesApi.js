import { handleResponse } from './utils.js';

const getMovies = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  })
    .then(handleResponse)
};

export default getMovies;
