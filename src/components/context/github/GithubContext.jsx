import { createContext, useReducer } from 'react';
import { githubReducer } from './GithubReducer';
export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
 const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
 };

 const [state, dispatch] = useReducer(githubReducer, initialState);

 return (
  <GithubContext.Provider
   value={{
    ...state,
    dispatch,
   }}>
   {children}
  </GithubContext.Provider>
 );
};

//When I add state from useReducer  I need to pass the value with 'state.NAME OF THE VALUE'
