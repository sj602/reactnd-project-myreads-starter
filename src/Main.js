import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class Main extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleShelf: PropTypes.func.isRequired,
  };

  render() {
    const { books, handleShelf } = this.props;
    const wantToRead = books.filter((book) => {
      return book.shelf === 'wantToRead';
    });
    const currentlyReading = books.filter((book) => {
      return book.shelf === 'currentlyReading';
    });
    const read = books.filter((book) => {
      return book.shelf === 'read';
    });

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              name="wantToRead"
              books={ wantToRead }
              handleShelf={ handleShelf }
            />
            <Bookshelf
              name="currentlyReading"
              books={ currentlyReading }
              handleShelf={ handleShelf }
            />
            <Bookshelf
              name="read"
              books={ read }
              handleShelf={ handleShelf }
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main;
