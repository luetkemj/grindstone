import React, { PropTypes } from 'react';

import style from './activity.component.scss';

export default function Activity({
  activityDay,
  activityDuration,
  activityDistance,
  activityPace,
  goal,
  variance,
}) {
  const success = (variance >= 0 ? style.success : style.fail);

  return (
    <div className={style.day}>
      <div className={style.activityDay}>{activityDay}</div>
      <div className={style.goal}>{goal}</div>
      <div className={style.distance}>{activityDistance}</div>
      <div className={style.duration}>
        {activityDuration.hours}:{activityDuration.minutes}:{activityDuration.seconds}
      </div>
      <div className={style.pace}>
        {activityPace.minutes}:{activityPace.seconds}
      </div>
      <div className={success}>{variance}</div>
    </div>
  );
}

Activity.propTypes = {
  activityDay: PropTypes.string.isRequired,
  activityDuration: PropTypes.object.isRequired,
  activityDistance: PropTypes.number.isRequired,
  activityPace: PropTypes.object.isRequired,
  goal: PropTypes.number.isRequired,
  variance: PropTypes.number.isRequired,
};
