import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./SavedMovies.css"

function SavedMovies ({
  savedCards,
  deleteCard,
}) {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList
          currentCards={savedCards}
          deleteCard={deleteCard}
          isSaved={true}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
