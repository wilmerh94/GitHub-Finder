export const githubReducer = (state, action) => {
 //State= current state. Action = string to increase or decrease
 switch (
  action.type //Evaluate the action type
 ) {
  case 'FETCH_USERS': //define an object
   return {
    ...state,
    users: action.payload, //from here we can access the payload which has the data form the API
    loading: false,
   };
  case 'FETCH_USER_AND_REPOS':
   return {
    ...state,
    user: action.payload.user,
    repos: action.payload.repos,
    loading: false,
   };
  case 'SET_LOADING':
   return {
    ...state,
    loading: true,
   };

  case 'CLEAR_USERS':
   return {
    ...state,
    users: [],
    loading: false,
   };
  default: //this is going to return the state as it is
   return state;
 }
};
