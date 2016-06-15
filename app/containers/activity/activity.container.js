import React, { PropTypes } from 'react';

import Activity from '../../components/activity/activity.component';

export default function ActivityContainer({
  activityDay, activityDuration, activityDistance, activityPace, goal, variance }) {
  return (
    <Activity
      activityDay={activityDay}
      activityDuration={activityDuration}
      activityDistance={activityDistance}
      activityPace={activityPace}
      goal={goal}
      variance={variance}
    />
  );
}

ActivityContainer.propTypes = {
  activityDay: PropTypes.string.isRequired,
  activityDuration: PropTypes.object.isRequired,
  activityDistance: PropTypes.number.isRequired,
  activityPace: PropTypes.object.isRequired,
  goal: PropTypes.number.isRequired,
  variance: PropTypes.number.isRequired,
};
