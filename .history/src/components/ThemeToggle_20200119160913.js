import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        return (
            <button onClick ={}>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;
