import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

export default class Bookshelf extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleShelf: PropTypes.func.isRequired,
  };

  render() {
    const { name, books, handleShelf } = this.props
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ name }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books.map((book) => (
                  <li key={ book.id }>
                    <Book
                      id={ book.id }
                      shelf={ book.shelf }
                      authors={ book.authors }
                      title={ book.title }
                      imageLinks={ book.imageLinks }
                      handleShelf={ handleShelf }
                    />
                  </li>
              ))}
            </ol>
          </div>
        </div>
      );
  };
}
