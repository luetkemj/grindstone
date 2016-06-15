import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import activitiesReducer from './activities.reducer';

export default combineReducers({
  routing,
  activitiesState: activitiesReducer,
});
