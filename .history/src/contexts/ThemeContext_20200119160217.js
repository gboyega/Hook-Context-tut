import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#444', ui: '#ccc', bg: '#ddd'},
        dark: { syntax: '#ccc', ui: '#222', bg: '#444'}
     }
     toggleTheme = () => {
         this.setState({ isLightTheme: !is})
     }
    render() { 
        return (
            <ThemeContext.Provider value = {{...this.state}}>
            {this.props.children}

            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;