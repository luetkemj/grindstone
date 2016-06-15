import moment from 'moment';

import { mockActivities } from '../mock/activities.js';

export function getMockActivities() {
  return mockActivities;
}

export function pad(num, size) {
  const stringNum = num.toString();
  const paddedNum = stringNum.length < size ? 0 + stringNum : stringNum;

  return paddedNum;
}

export function buildActivityDuration(duration) {
  const activityDuration = moment.duration(duration * 1000);
  const hours = pad(activityDuration.hours(), 1);
  const minutes = pad(activityDuration.minutes(), 2);
  const seconds = pad(activityDuration.seconds(), 2);

  return {
    hours,
    minutes,
    seconds,
  };
}

export function buildActivityPace(duration, distance) {
  const activityDuration = moment.duration(duration * 1000);
  const minutes = pad(moment.duration(activityDuration / distance).minutes(), 2);
  const seconds = pad(moment.duration(activityDuration / distance).seconds(), 2);

  return {
    minutes,
    seconds,
  };
}

export function setVariance(distanceA, distanceB) {
  return Math.round((distanceA - distanceB) * 100) / 100;
}

export function buildActivityUi(activity) {
  return {
    activityId: activity.activityId,
    activityDay: moment(activity.startDateTimeLocal).format('dddd'),
    activityDuration: buildActivityDuration(activity.duration),
    activityDistance: Math.round(activity.distance * 100) / 100,
    activityPace: buildActivityPace(activity.duration, activity.distance),
    goal: 6,
    variance: setVariance(activity.distance, 6),
  };
}
