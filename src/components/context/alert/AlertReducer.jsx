export const alertReducer = (state, action) => {
 //State= current state. Action = string to increase or decrease
 switch (
  action.type //Evaluate the action type
 ) {
  case 'SET_ALERT': //define an object
   return action.payload; //from here we can access the payload which has the data form the API
  case 'CLEAR_ALERT':
   return null;
  default: //this is going to return the state as it is
   return state;
 }
};
