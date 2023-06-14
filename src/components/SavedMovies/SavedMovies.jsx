import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./SavedMovies.css"

function SavedMovies ({
  savedCards,
  deleteCard,
  searchCards,
  isShortMovie,
  isSearch,
  setIsShortMovie,
}) {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm
          searchCards={searchCards}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
        />
        <MoviesCardList
          currentCards={savedCards}
          isSearch={isSearch}
          deleteCard={deleteCard}
          isSaved={true}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
