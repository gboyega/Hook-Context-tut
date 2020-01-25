import React, { Component } from 'react';
import { Theme}

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        return (
            <button onClick ={}>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;
