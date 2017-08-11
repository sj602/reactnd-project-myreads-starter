import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
  render() {
    const { name, books, updateBookShelf } = this.props
    console.log(books)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ name }</h2>
        <div className="bookshelf-books">
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

export default Bookshelf
