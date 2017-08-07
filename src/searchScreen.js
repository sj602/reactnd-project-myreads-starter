import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class searchScreen extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      books: []
    }
  }

  searchQuery(query) {
    this.setState({ query: query })
    const trimmedQuery = query.trim()
    if (trimmedQuery === '') return

    BooksAPI.search(trimmedQuery, 10).then((response) => {
      console.log(trimmedQuery, response)

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
        console.log(book)
      })
      this.setState({ books: books })
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
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default searchScreen
