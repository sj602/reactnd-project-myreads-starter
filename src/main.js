  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import Bookshelf from './Bookshelf';

  class Main extends Component {
    // books 가 없는 경우 예외처리를 안 해줘서 에러가 생기는 것 같다.
    // const wantToRead = books.filter(book => book.shelf == 'wanttoread')
    filterBooks = (shelf) => {
      const { books } = this.props;
      return books.filter((book) => book.shelf === shelf);
    }

    render() {
      const { updateBookShelf } = this.props;

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                name="Currently Reading"
                books={ this.filterBooks('currentlyReading')}
                updateBookShelf={ updateBookShelf } />
              <Bookshelf
                name="Want To Read"
                books={ this.filterBooks('wantToRead')}
                updateBookShelf={ updateBookShelf } />
              <Bookshelf
                name="Read"
                books={ this.filterBooks('read')}
                updateBookShelf={ updateBookShelf } />
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
