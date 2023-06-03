import React from "react";

import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import More from "../More/More"
import Footer from "../Footer/Footer"

import './Movies.css'

function Movies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList />
        <More />
      </main>
      <Footer />
    </>
  )
}

export default Movies
