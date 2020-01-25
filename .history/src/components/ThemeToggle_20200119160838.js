import React, { Component } from 'react';

class ThemeToggle extends Component {
    static contextType = Theme
    render() { 
        return (
            <button onClick ={}>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;
