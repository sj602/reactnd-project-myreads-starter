import React from 'react'
import './App.css'
import SearchScreen from './SearchScreen'
import Main from './Main'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/" component={Main} />
      </div>
      )
    }
  }

export default BooksApp
