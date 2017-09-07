import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    constructor() {
      super();
      this.state = { shelf: 'none' };
    }

    changeBookShelf(value) {
      this.setState({ shelf: value})
      // window.history.back()
    }

    render() {
      const { title, authors, imageLinks, shelf, id} = this.props;
      const { thumbnail } = imageLinks;
      return (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + thumbnail + ')' }}></div>
              <div className="book-shelf-changer">
                <select value={ shelf } onChange={ (e) => this.changeBookShelf(e.target.value) }>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{ title }</div>
            <div className="book-authors">{ authors }</div>
          </div>
  );
  }
}

export default Book;
