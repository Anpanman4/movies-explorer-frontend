import React from "react";

import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"

function Movies({
  isLoading,
  currentCards,
  searchCards,
  isShortMovie,
  setIsShortMovie,
  saveCard,
  isSearch,
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
          isSearch={isSearch}
          deleteCard={deleteCard}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies
