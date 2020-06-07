import React, { Component } from 'react';
import { Theme}

class Navbar extends Component {
    static contextType = ThemeContext

    render() { 
        return (
          <nav>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );
    }
}
 
export default Navbar ;