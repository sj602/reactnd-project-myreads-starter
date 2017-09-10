import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import Bookshelf from './Bookshelf'

class SearchScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      books: []
    };
  }

  searchQuery = (query) => {
    const { libraryBooks } = this.props

    this.setState({ query: query });
    if (query === '') {
      return;
    }
    BooksAPI.search(query, 10).then((response) => {
      if (response && response.length) {
        const books = response.map((book) => {

          const libBook = libraryBooks.find((libBook) => libBook.id === book.id);
          console.log(libBook)
          // if there is already a searchedbook in the shelf,
          const shelf = libBook ? libBook.shelf : 'none';
          // attain libbook.shelf to const shelf. if not, none

          return {
            id: book.id,
            shelf: shelf,
            authors: book.authors,
            title: book.title,
            imageLinks: {
              thumbnail: book.imageLinks.thumbnail
            }
          };
        });
        this.setState({ books });
      }
    });
  }

  render() {
    const { books } = this.state;
    const { handleShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" onChange={(e) => this.searchQuery(e.target.value) } name="searchTerm" placeholder="Search by title or author" />
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { books.map((book) => (
              <li key={ book. id }>
                <Book
                id={ book.id }
                shelf={ book.shelf }
                authors={ book.authors }
                title={ book.title }
                imageLinks={ book.imageLinks }
                handleShelf={ handleShelf }
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchScreen;
