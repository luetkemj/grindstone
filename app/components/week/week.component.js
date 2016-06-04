import React, { PropTypes } from 'react';

import style from './week.component.scss';

export default function Week({ DayContainer, weekData }) {
  const week = weekData.map((day, index) =>
    <DayContainer key={index} {...day} />
  );

  return (
    <div className={style.week}>
      {week}
    </div>
  );
}

Week.propTypes = {
  DayContainer: PropTypes.func.isRequired,
  weekData: PropTypes.array.isRequired,
};
