import React, { Component } from 'react'

class Books extends Component {
  render() {
    const { book } = this.props;
    
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select defaultValue={book.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && (
                book.authors.map((author, index) => {
                    /* Handles multiple authors
                        & lack of authors */
                    return (book.authors.length !== index+1) ? `${author}, ` : author;
                })
            )}</div>
        </div>
    )
  }
}

export default Books;