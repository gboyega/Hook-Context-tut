import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const {toggleTheme} = t
        return (
            <button onClick ={}>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;
