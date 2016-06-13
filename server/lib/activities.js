import moment from 'moment';

import { mockActivities } from '../mock/activities.js';

export function getMockActivities() {
  return mockActivities;
}

export function buildActivityDuration(duration) {
  const activityDuration = moment.duration(duration * 1000);
  const hours = activityDuration.hours();
  const minutes = activityDuration.minutes();
  const seconds = activityDuration.seconds();

  return {
    hours,
    minutes,
    seconds,
  };
}

export function buildActivityPace(duration, distance) {
  const activityDuration = moment.duration(duration * 1000);
  const minutes = moment.duration(activityDuration / distance).minutes();
  const seconds = moment.duration(activityDuration / distance).seconds();

  return {
    minutes,
    seconds,
  };
}

export function setVariance(duration, distance) {
  return duration - distance;
}

export function buildActivityUi(activity) {
  return {
    activityId: activity.activityId,
    activityDay: moment(activity.startDateTimeLocal).format('dddd'),
    activityDuration: buildActivityDuration(activity.duration),
    activityDistance: activity.distance,
    activityPace: buildActivityPace(activity.duration, activity.distance),
    goal: 6,
    variance: setVariance(activity.distance, 6),
  };
}
