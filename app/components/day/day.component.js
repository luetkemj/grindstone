import React, { PropTypes } from 'react';

import style from './day.component.scss';

export default function Day({ name, goal, actual, variance }) {
  const goalMet = (variance >= 0 ? style.actualSuccess : style.actualFail);

  return (
    <div className={style.day}>
      <div className={style.name}>{name}</div>
      <div className={style.goal}>{goal}</div>
      <div className={goalMet}>{actual}</div>
      <div className={style.variance}>{variance}</div>
    </div>
  );
}

Day.propTypes = {
  name: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  actual: PropTypes.number.isRequired,
  variance: PropTypes.number.isRequired,
};
