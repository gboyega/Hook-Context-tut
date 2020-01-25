import React, { Component } from 'react'

class BookList extends Component {
    
    render() { 
        return (
          <div className="book-list">
            <ul>
              <li>The Sorcerers Stone</li>
              <li>The Chamber of Secrets </li>
              <li>The Prisoner of Azkab</li>
            </ul>
          </div>
        );
    }
}
 
export default BookList;