import * as _ from 'lodash';

import { getMockActivities, buildActivityUi } from '../../lib/activities';

export function getActivities(req, res) {
  const mockActivities = getMockActivities();
  const activityUi = _.map(mockActivities, buildActivityUi);

  return res.send(activityUi);
}

export function getActivity(req, res) {
  const activityId = req.params.activityId;
  const mockActivities = getMockActivities();
  const activity = _.find(mockActivities, ['activityId', +activityId]);
  const activityUi = buildActivityUi(activity);

  return res.send(activityUi);
}
