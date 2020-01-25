import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
    <ThemeContextProvider></ThemeContextProvider>
      <Navbar />
      <BookList />
      
    </div>
  );
}

export default App;
