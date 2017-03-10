import { takeLatest } from 'redux-saga';
import { fork, take, cancel } from 'redux-saga/effects';
import { fetchApplications } from './applications/sagas';

import ApiApplications from '../api/applications';

/*
*  Main saga generator
*/
export default function* sagas() {
  yield fork(takeLatest, 'APPLICATIONS_FETCH', fetchApplications, ApiApplications);
}
