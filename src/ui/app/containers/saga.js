/**
 * saga.js
 *
 * This file contains the Saga function used to get data from the
 * service layer. The Saga function injects data into the Redux
 * store via the put function, which takes an action as a parameter.
 *
 * @see https://redux-saga.js.org/
 * @see https://decembersoft.com/posts/changing-react-route-programmatically-with-redux-saga/
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import { DISPATCH_ACTIONS } from './constants'; 

export function* getLuckyNumber({ username }) {
  // TODO: What port is the service layer running on again?
  
  const requestUrl = `http://localhost:???/lucky-number?username=${username}`;

  try {
    const result = yield call(request, requestUrl);

    // TODO: Do stuff with the result
  } catch (err) {
    // TODO: Bonus points for some error handling
  }
}

export default function* sagaFunction() {
  yield takeLatest(DISPATCH_ACTIONS.GET_LUCKY_NUMBER, getLuckyNumber);
}
