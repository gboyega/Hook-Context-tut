import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const {toggle}
        return (
            <button onClick ={}>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;
