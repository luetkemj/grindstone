import React, { PropTypes } from 'react';

import Week from '../../../components/week/week.component';
import Day from '../../../components/day/day.component';

export default function WeekTestComponent() {
  function MockDayContainer({ name, goal, actual, variance }) {
    return (
      <div>
        <Day
          name={name}
          goal={goal}
          actual={actual}
          variance={variance}
        />
      </div>
    );
  }

  MockDayContainer.propTypes = {
    name: PropTypes.string.isRequired,
    goal: PropTypes.number.isRequired,
    actual: PropTypes.number.isRequired,
    variance: PropTypes.number.isRequired,
  };

  const mockWeekData = [
    {
      name: 'Monday',
      goal: 6,
      actual: 0,
      variance: -6,
    },
    {
      name: 'Tuesday',
      goal: 6,
      actual: 5,
      variance: -1,
    },
    {
      name: 'Wednesday',
      goal: 6,
      actual: 6.1,
      variance: 0.1,
    },
    {
      name: 'Thursday',
      goal: 6,
      actual: 5.9,
      variance: -0.1,
    },
    {
      name: 'Friday',
      goal: 6,
      actual: 7.1,
      variance: 1.1,
    },
    {
      name: 'Saturday',
      goal: 6,
      actual: 6,
      variance: 0,
    },
    {
      name: 'Sunday',
      goal: 6,
      actual: 7,
      variance: 1,
    },
  ];

  return (
    <div>
      <Week
        DayContainer={MockDayContainer}
        weekData={mockWeekData}
      />
    </div>
  );
}
