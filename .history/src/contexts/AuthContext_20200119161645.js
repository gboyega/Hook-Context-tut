import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    toggleAuth = () => {
        this.setState({isAuthenticated : !this.sta})
    }
    render() { 
        return (  );
    }
}
 
export default AuthContextProvider;
