import React from 'react';
import Book from './Book';

export default function Bookshelf({ name, books }) {
  return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ name }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map((book) => (
                <li>
                  <Book
                    id={ book.id }
                    shelf={ book.shelf }
                    authors={ book.authors }
                    title={ book.title }
                    imageLinks={ book.imageLinks }
                  />
                </li>
            ))}
          </ol>
        </div>
      </div>
    );
};
