import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#444', ui: '#c'}
     }
    render() { 
        return (  );
    }
}
 
export default ThemeContextProvide
isLightTheme: true,
light: {}r;