import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import ActivityContainer from '../activity/activity.container';
import { loadActivities } from '../../actions/activities.actions.js';

class ActivitiesContainer extends Component {
  componentWillMount() {
    this.props.loadActivities();
  }

  render() {
    const activitiesData = this.props.activitiesState.activities;
    const activities = _.map(activitiesData, (activity) =>
      (<ActivityContainer key={activity.activityId} {...activity} />)
    );

    return (
      <div>
        {activities}
      </div>
    );
  }
}

ActivitiesContainer.propTypes = {
  activitiesState: PropTypes.object.isRequired,
  loadActivities: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    activitiesState: state.activitiesState,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadActivities }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivitiesContainer);
