  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import Bookshelf from './Bookshelf';
  
  class Main extends Component {
    // 빈 books array 때문에..
    // books 가 없는 경우 예외처리를 안 해줘서 에러가 생기는 것 같다.
    // const wantToRead = books.filter(book => book.shelf == 'wanttoread')
    // filterBooks = (shelf) => {
    //   const { books } = this.props;
    //   return books.filter((book) => book.shelf === shelf);
    // }

    // const wantToRead = books.filter(book => book.shelf == 'wantToRead');


    // Q. Main페이지에서 shelf를 바꾸면 안 넘어가는점.

    render() {

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                name="wantToRead"
                books={this.props.books.filter((book) => {
                  return book.shelf === 'wantToRead'
                })}
                handleShelf={ this.props.handleShelf }
              />
              <Bookshelf
                name="currentlyReading"
                books={this.props.books.filter((book) => {
                  return book.shelf === 'currentlyReading'
                })}
                handleShelf={ this.props.handleShelf }
              />
              <Bookshelf
                name="read"
                books={this.props.books.filter((book) => {
                  return book.shelf === 'read'
                })}
                handleShelf={ this.props.handleShelf }
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
