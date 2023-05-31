import React from "react";

import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"

import './Movies.css'

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default Movies
