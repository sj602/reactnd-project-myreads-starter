import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class searchScreen extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      books: [],
    }
  }

  searchQuery(query) {
    this.setState({ query: query })
    const trimmedQuery = query.trim()
    if (trimmedQuery === '') return

    const { mainBooks } = this.props
    BooksAPI.search(trimmedQuery, 10).then((response) => {
      const books = response.map((book) => {
        return {
          id: book.id,
          shelf: book.shelf,
          authors: book.authors,
          title: book.title,
          imageLinks: {
            thumbnail: book.imageLinks.thumbnail
          }
        }
      })
      this.setState({ books: books })
      console.log(books)
      })
  }

  render() {
    const { books } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" onChange={ (e) => this.searchQuery(e.target.value) } name="searchTerm" placeholder="Search by title or author" />
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
              id={ book.id }
              shelf={ book.shelf }
              authors={ book.authors }
              title={ book.title }
              imageLinks={ book.imageLinks }
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default searchScreen
