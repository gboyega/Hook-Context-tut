import React, { Component } from 'react';
import ThemeContext from "../contexts/ThemeContext";

class BookList extends Component {
     static contextType = ThemeContext;
     const {isLight, light, dark} 
     const theme = isLight
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