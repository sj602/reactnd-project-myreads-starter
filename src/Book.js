import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
      handleShelf: PropTypes.func.isRequired,
      shelf: PropTypes.string.isRequired,
    }

    constructor() {
      super();
      this.state = { shelf: 'none' };
    }

    changeBookShelf(value) {
      const { handleShelf } = this.props
      handleShelf(this.props, value)
      this.setState({ shelf: value})
      // window.history.back()
    }

    componentDidMount () {
        const { shelf } = this.props;
        this.setState({ shelf });
    };

    render() {
      const { title, authors, imageLinks, id } = this.props;
      const { thumbnail } = imageLinks;
      const { shelf } = this.state

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
