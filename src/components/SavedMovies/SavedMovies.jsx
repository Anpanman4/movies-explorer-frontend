import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./SavedMovies.css"

function SavedMovies ({
  savedCards,
}) {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList
          currentCards={savedCards}
          isSaved={true}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
