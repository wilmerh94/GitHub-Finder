import { createContext, useReducer } from 'react';
import { alertReducer } from './AlertReducer';
export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
 const initialState = null;

 const [state, dispatch] = useReducer(alertReducer, initialState);

 //  set Alert
 const setAlert = (msg, type) => {
  dispatch({
   type: 'SET_ALERT',
   payload: { msg, type },
  });
  setTimeout(() => dispatch({ type: 'CLEAR_ALERT' }), 3000);
 };
 return (
  <AlertContext.Provider value={{ alert: state, setAlert }}>
   {children}
  </AlertContext.Provider>
 );
};

//When I add state from useReducer  I need to pass the value with 'state.NAME OF THE VALUE'
