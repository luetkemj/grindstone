import moment from 'moment';

import { mockActivities } from '../mock/activities.js';

export function getMockActivities() {
  return mockActivities;
}

export function buildActivityDuration(duration) {
  const activityDuration = moment.duration(duration * 1000);
  const hours = activityDuration.hours();
  const minutes = activityDuration.minutes();

  return {
    hours,
    minutes,
  };
}

function getVariance(duration, goal) {
  return duration - goal;
}

export function buildActivityUi(activity) {
  return {
    activityId: activity.activityId,
    activityDay: moment(activity.startDateTimeLocal).format('dddd'),
    activityDuration: buildActivityDuration(activity.duration),
    activityDistance: activity.distance,
    goal: 6,
    variance: getVariance(activity.distance, 6),
  };
}
