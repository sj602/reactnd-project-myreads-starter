  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import Bookshelf from './Bookshelf';

  class Main extends Component {
    render() {
      const { books, handleShelf } = this.props;
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                name="wantToRead"
                books={books.filter((book) => {
                  return book.shelf === 'wantToRead'
                })}
                handleShelf={ handleShelf }
              />
              <Bookshelf
                name="currentlyReading"
                books={books.filter((book) => {
                  return book.shelf === 'currentlyReading'
                })}
                handleShelf={ handleShelf }
              />
              <Bookshelf
                name="read"
                books={books.filter((book) => {
                  return book.shelf === 'read'
                })}
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
