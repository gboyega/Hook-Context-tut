import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    toggleAuth = () => {
        this.setState({is})
    }
    render() { 
        return (  );
    }
}
 
export default AuthContextProvider;
