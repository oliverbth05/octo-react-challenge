import { fromJS } from 'immutable';
import { DISPATCH_ACTIONS } from './constants';

const initialState = fromJS({
  luckyNumber: -1,
  firstName: null, //added
  lastName: null //added
}); 
 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_ACTIONS.SET_LUCKY_NUMBER:
      return fromJS({...action.payload})

    default:
      return state; 
  }
}

export default reducer;
