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

  render() {
    this.componentDidMount()

    const { books } = this.state
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchScreen />
        )} />
        <Route exact path="/" render={() => (
          <Main books={this.state.books} />
        )} />
      </div>
      )
    }
  }

export default BooksApp
