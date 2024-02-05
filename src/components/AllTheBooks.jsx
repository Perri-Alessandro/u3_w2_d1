import React, { Component } from "react";
import BookCard from "../components/SingleBook";

class CardBooks extends Component {
  render() {
    const { films, searchTerm } = this.props;

    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        {filteredFilms.slice(0, 8).map((film) => (
          <BookCard className="col" key={film.asin} film={film} />
        ))}
      </>
    );
  }
}

export default CardBooks;
