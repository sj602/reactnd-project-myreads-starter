import React from 'react';
import Book from './Book';

export default function Bookshelf({ name, books, updateBookShelf }) {
  return(
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
              updateBookShelf={ updateBookShelf }
              />
            ))}
          </ol>
        </div>
      </div>
    )
}
