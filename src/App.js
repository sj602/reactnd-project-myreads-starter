import React from 'react'
import './App.css'
import SearchScreen from './SearchScreen'
import Main from './Main'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
      console.log(books)
    })
  }

  // updateBookShelf = (book, updatedShelf) => {
  //   const { books } = this.state;
  //
  //   const bookIndex = books.findIndex((key) => {
  //     return key.id === book.id;
  //   });
  //
  //   let stateBooks = Object.assign([], books);
  //
  //   if (bookIndex === -1) {
  //     const newBook = Object.assign({}, book);
  //     newBook.shelf = updatedShelf;
  //     stateBooks.push(newBook);
  //   } else {
  //     stateBooks[bookIndex] = Object.assign({}, stateBooks[bookIndex]);
  //     stateBooks[bookIndex].shelf = updatedShelf;
  //   }
  //
  //   BooksAPI.update(book, updatedShelf).then(
  //     this.setState({ books: stateBooks })
  //   );
  // };

  handleShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      })
    })
  }
  // Q. handleShelf(book, shelf) { ... } 이런식으로 썻다면 차이점? 밑에 render부분도 handleShelf={this.handleShelf(book, shelf)}가 되는지..

  render() {

    const { books } = this.state
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchScreen libraryBooks={this.state.books} handleShelf={this.handleShelf} />
        )} />
        <Route exact path="/" render={() => (
          <Main books={this.state.books} handleShelf={this.handleShelf} />
        )} />
      </div>
      )
    }
  }

export default BooksApp
