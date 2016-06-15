import {
  FETCH_DEFAULT_OPTIONS,
  checkHttpStatus,
  handleHttpError,
} from '../utils/http.utils';

import {
  LOADING_ACTIVITIES,
  LOADING_ACTIVITIES_ERROR,
  ACTIVITIES_LOADED,
} from '../constants/action-types';

function loadingActivities() {
  return {
    type: LOADING_ACTIVITIES,
  };
}

function loadingActivitiesError() {
  return {
    type: LOADING_ACTIVITIES_ERROR,
  };
}

function activitiesLoaded(activities) {
  return {
    type: ACTIVITIES_LOADED,
    activities,
  };
}

export function loadActivities() {
  return (dispatch) => {
    dispatch(loadingActivities());
    const uri = 'api/activities';
    const options = Object.assign({}, FETCH_DEFAULT_OPTIONS, {
      method: 'GET',
    });
    return fetch(uri, options)
    .then(checkHttpStatus)
    .then(response => response.json())
    .then(activities => dispatch(activitiesLoaded(activities)))
    .catch(error => handleHttpError(dispatch, error, loadingActivitiesError));
  };
}
