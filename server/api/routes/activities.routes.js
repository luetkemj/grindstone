import { getActivities, getActivity } from '../controllers/activities.controller';

module.exports = (router) => {
  router.route('/api/activities').get(getActivities);
  router.route('/api/activities/:activityId').get(getActivity);
};
