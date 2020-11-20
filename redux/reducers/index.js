import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper';

import ResultsReducers from './ResultsReducers'

const RootReducer = (state = {}, action) => {
  // console.log('========= [RootReducer Start] =========');
  // console.log(state);
  // console.log('========= [RootReducer End] =========');
  // console.log('========================================');
    switch (action.type) {
      case HYDRATE:
          // Attention! This will overwrite client state! Real apps should use proper reconciliation.
        return {
          ...state, 
          ...action.payload
        };
      default:
        return state;
    }
};

export default combineReducers({
  RootReducer,
  ResultsReducers
})
