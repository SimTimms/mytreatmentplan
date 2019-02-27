import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SingleStat, SingleIconStat } from './SingleStat';

class ExerciseStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-around',
        }}
      >
        <SingleIconStat content="2" title="Level" />
        <SingleStat content="Days" statNumber="10" title="Streak" />
        <SingleStat
          content="Total"
          statNumber={this.props.doneExercises.length}
          title="Completed"
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    doneExercises: state.exercises,
    gradientColor: ownProps.gradientColor,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ExerciseStats);
