import React from 'react';
import './App.css';
import SearchScreen from './SearchScreen';
import Main from './Main';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  handleShelf = (book, shelf) => {
    if( book.shelf !== shelf ){
      BooksAPI.update(book, shelf).then((data) => {
        this.setState(prev => {
          return {
            books: prev.books.filter((b) => book.id !== b.id)
                             .concat([{...book, shelf}])
          };
        });
      })}
  }

  render() {

    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchScreen libraryBooks={ books } handleShelf={this.handleShelf} />
        )} />
        <Route exact path="/" render={() => (
          <Main books={ books } handleShelf={this.handleShelf} />
        )} />
      </div>
    );
    }
};

export default BooksApp;
