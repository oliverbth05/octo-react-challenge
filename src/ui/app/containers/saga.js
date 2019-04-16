import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import { DISPATCH_ACTIONS } from './constants';
import { setLuckyNumber } from './actions';

export function* getLuckyNumber({ payload }) {
  // Using payload convention for redux actions

  const requestUrl = `http://localhost:1337/lucky-number?username=${payload.userName}`; // PORT:1337 by default for sails

  try {
    const result = yield call(request, requestUrl);
    yield put(
      setLuckyNumber({
        firstName: payload.firstName,
        lastName: payload.lastName,
        luckyNumber: result.luckyNumber
      })
    ); // Uses the original parameters to the generator, along with return value of request
    yield put(push('/lucky'));
  } catch (err) {
    console.log(err);
    alert('An error occurred while using service, please try again.');
  }
}

export default function* sagaFunction() {
  yield takeLatest(DISPATCH_ACTIONS.GET_LUCKY_NUMBER, getLuckyNumber);
}
