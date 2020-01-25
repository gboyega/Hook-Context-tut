import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    toggleAuth = () => {
        this.setState({isAuthenticated : !this.state.isAuthenticated});
    }
    render() { 
        return (
           <AuthContext.Provider value = {{...this.state}}>

           </AuthContext.Provider> 
        );
    }
}
 
export default AuthContextProvider;
