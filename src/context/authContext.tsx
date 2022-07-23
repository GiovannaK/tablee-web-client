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

type UserData = {
  role: string;
  email: string;
  firstName: string;
  lastName: string;
}

type State = {
  userData: UserData;
  token?: string;
}

type Action = {type: 'LOGIN'; payload: UserData} | {type: 'LOGOUT'};

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
  login: (userData: UserData, token?: string) => {},
  logout: () => {},
});

function authReducer(state: UserData, action: Action) {
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
  const [state, dispatch] = useReducer(authReducer as any, intialState as any) as any;

  function login(userData: UserData, token: string) {
    localStorage.setItem('token', token);
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
