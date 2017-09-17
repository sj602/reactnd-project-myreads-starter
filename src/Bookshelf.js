import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Bookshelf = (props) => {
  return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ props.name }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                props.books.map((book) => (
                  <li key={ book.id }>
                    <Book
                      id={ book.id }
                      shelf={ book.shelf }
                      authors={ book.authors }
                      title={ book.title }
                      imageLinks={ book.imageLinks }
                      handleShelf={ props.handleShelf }
                    />
                  </li>
              ))}
            </ol>
          </div>
        </div>
  );
};

Bookshelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelf: PropTypes.func.isRequired,
};

export default Bookshelf;
