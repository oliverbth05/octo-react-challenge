import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(data) {
  // Data contains first, last and username
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    payload: data
  };
}

export function setLuckyNumber(data) {
  // Data contains first, last and lucky number
  return {
    type: DISPATCH_ACTIONS.SET_LUCKY_NUMBER,
    payload: data
  };
}
