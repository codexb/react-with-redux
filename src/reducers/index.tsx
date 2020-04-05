import { combineReducers } from 'redux';

// Reducers
const initialState = {
    users: [],
    userProfile: {
      repos: []
    }
  };
const userReducer = function(state = initialState, action: any) {
  
    return state;
  
  }
  
// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
});

export default reducers;