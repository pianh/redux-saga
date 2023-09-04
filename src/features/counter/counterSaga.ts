import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';
import { fetchCount } from './counterAPI';

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* test() {
  yield fetchCount(2);
  //and
  yield call(fetchCount, 2);
}

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s');
  //Wait 1s
  yield delay(1000);
  //Dispatch action success
  console.log('Waiting done, dispatch action');
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
