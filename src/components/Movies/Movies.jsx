import React from "react";

import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import More from "../More/More"
import Footer from "../Footer/Footer"

function Movies({
  currentCards,
  searchCards,
  isShortMovie,
  setIsShortMovie,
}) {
  return (
    <>
      <Header />
      <main>
        <SearchForm
          searchCards={searchCards}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
        />
        <MoviesCardList
          currentCards={currentCards}
          isSaved={false}
        />
        <More />
      </main>
      <Footer />
    </>
  )
}

export default Movies
