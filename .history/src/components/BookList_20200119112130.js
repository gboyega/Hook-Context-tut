import React, { Component } from 'react';
import ThemeContext from "../contexts/ThemeContext";

class BookList extends Component {
     static contextType = ThemeContext;
     const {isLightTheme, light, dark} = this.context;
     const theme = isLight ? light : dark;
    render() { 
      
        return (
          <div className="book-list" style = {{background:theme.ui, color:theme.syntax}}>
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