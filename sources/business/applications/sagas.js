import { call, put } from 'redux-saga/effects';
import {
  fetchApplicationsPending, fetchApplicationsSuccess, fetchApplicationsFailure
} from './actions';

export function* fetchApplications(api) {
  try {
    yield put(fetchApplicationsPending());
    const applications = yield call(api.getApplications);
    yield put(fetchApplicationsSuccess(applications));
  }
  catch (error) {
    yield put(fetchApplicationsFailure(error));
  }
}
