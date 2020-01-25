import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    toggleAuth = () => {
        this
    }
    render() { 
        return (  );
    }
}
 
export default AuthContextProvider;
