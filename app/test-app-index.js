import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TestApp from './containers/test/test-app/test-app.container';
import TestHomeContainer from './containers/test/test-home/test-home.container';
import WeekTestComponent from './containers/test/week-test/week-test.container';
import DayTestComponent from './containers/test/day-test/day-test.container';

render(
  <Router history={browserHistory}>
    <Route path="/" component={TestApp}>
      <IndexRoute component={TestHomeContainer} />
      <Route path="/day-component" component={DayTestComponent} />
      <Route path="/week-component" component={WeekTestComponent} />
    </Route>
  </Router>,
  document.getElementById('app')
);
