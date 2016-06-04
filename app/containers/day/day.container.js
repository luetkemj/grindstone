import React, { PropTypes } from 'react';

import Day from '../../components/day/day.component';

export default function DayContainer({ name, goal, actual, variance }) {
  return (
    <Day
      name={name}
      goal={goal}
      actual={actual}
      variance={variance}
    />
  );
}

DayContainer.propTypes = {
  name: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  actual: PropTypes.number.isRequired,
  variance: PropTypes.number.isRequired,
};
