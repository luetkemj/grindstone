import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import weekReducer from './week.reducer';

export default combineReducers({
  routing,
  weekState: weekReducer,
});
