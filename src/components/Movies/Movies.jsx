import React from "react";

import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import More from "../More/More"
import Footer from "../Footer/Footer"

function Movies({
  isLoading,
  currentCards,
  searchCards,
  isShortMovie,
  setIsShortMovie,
  saveCard,
  deleteCard,
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
          isLoading={isLoading}
          currentCards={currentCards}
          saveCard={saveCard}
          isSaved={false}
          deleteCard={deleteCard}
        />
        <More />
      </main>
      <Footer />
    </>
  )
}

export default Movies
