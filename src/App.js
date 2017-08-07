import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import searchBooks from './searchBooks'
import searchScreen from './searchScreen'
import main from './main'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={searchScreen} />
        <Route exact path="/" component={main} />
      </div>
      )
    }
  }

export default BooksApp
