import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#444', ui: '#ccc', bg: '#fff'},
        dark: { syntax: '#ccc', ui: '#222', bg: '#444'}
     }
    render() { 
        return (
            <ThemeContext.
        );
    }
}
 
export default ThemeContextProvide
isLightTheme: true,
light: {}r;