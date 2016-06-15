import {
  LOADING_ACTIVITIES,
  LOADING_ACTIVITIES_ERROR,
  ACTIVITIES_LOADED,
} from '../constants/action-types';

const initialState = {
  activities: [],
  error: false,
  loadingActivities: false,
};

export default function activitiesReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_ACTIVITIES:
      return Object.assign({}, state, {
        loadingActivities: true,
      });
    case LOADING_ACTIVITIES_ERROR:
      return Object.assign({}, state, {
        error: true,
        loadingActivities: false,
      });
    case ACTIVITIES_LOADED:
      return Object.assign({}, state, {
        loadingActivities: false,
        activities: action.activities,
      });
    default:
      return state;
  }
}
