import React, { useContext } from "react";
import {ThemeContext} from "../contexts/ThemeContext";


const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The Sorcerers Stone</li>
        <li style={{ background: theme.ui }}>The Chamber of Secrets </li>
        <li style={{ background: theme.ui }}>The Prisoner of Azkaban</li>
      </ul>
    </div>
  );
}
 

export default BookList;
