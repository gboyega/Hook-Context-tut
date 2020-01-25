import React, { Component } from "react";
import {ThemeContext} from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style ={{background: theme.}}>The Sorcerers Stone</li>
          <li style ={{background: theme.}}>The Chamber of Secrets </li>
          <li style ={{background: theme.}}>The Prisoner of Azkaban</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
