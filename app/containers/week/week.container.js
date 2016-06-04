import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Week from '../../components/week/week.component';
import DayContainer from '../day/day.container';


function WeekContainer(props) {
  return (
    <div>
      <Week
        DayContainer={DayContainer}
        weekData={props.weeks}
      />
    </div>
  );
}

WeekContainer.propTypes = {
  weeks: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    weeks: state.weekState.weeks,
  };
}

export default connect(
  mapStateToProps,
)(WeekContainer);
