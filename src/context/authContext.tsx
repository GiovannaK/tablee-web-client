import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

const intialState = {
  user: null,
  authenticated: false,
};

interface IToken{
  role: string;
  sub: string;
  email: string;
  exp: number;
  iat: number;
}

if (typeof window !== 'undefined' && localStorage.getItem('token')) {
  const decodedToken = jwtDecode<IToken>(localStorage.getItem('token') as any);
  intialState.authenticated = true;

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
    intialState.authenticated = false;
  } else {
    intialState.user = decodedToken as any;
    intialState.authenticated = true;
  }
}

const AuthContext = createContext({
  user: null,
  authenticated: false,
  login: (userData: any) => {},
  logout: () => {},
});

function authReducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        authenticated: false,
      };
    default:
      return state;
  }
}

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, intialState);

  function login(userData: any) {
    localStorage.setItem('token', userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  }

  function logout() {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
        authenticated: state.authenticated,
      }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
