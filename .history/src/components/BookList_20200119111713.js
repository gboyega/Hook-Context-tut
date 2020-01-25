import React, { Component } from 'react';
import

class BookList extends Component {
     static contextType = ThemeContext;
    render() { 
        return (
          <div className="book-list">
            <ul>
              <li>The Sorcerers Stone</li>
              <li>The Chamber of Secrets </li>
              <li>The Prisoner of Azkaban</li>
            </ul>
          </div>
        );
    }
}
 
export default BookList;