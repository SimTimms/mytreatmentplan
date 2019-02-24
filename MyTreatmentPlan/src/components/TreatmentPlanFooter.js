import React from 'react';
import { Icon } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle';
import { View } from 'react-native';

import { connect } from 'react-redux';
//done exercises

class TreatmentPlanFooter extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 140,
          paddingBottom: 10,
        }}
      >
        <ProgressCircle
          percent={this.props.exercises.length}
          radius={18}
          borderWidth={4}
          color="#B4EC51"
          shadowColor="#429321"
          bgColor="#444"
        >
          <Icon name="fitness-center" type="material" color="#FFF" size={14} />
        </ProgressCircle>
        <ProgressCircle
          percent={this.props.exercises.length}
          radius={18}
          borderWidth={4}
          color="#6BE7FF"
          shadowColor="#8DBBFF"
          bgColor="#444"
        >
          <Icon name="location-on" type="material" color="#FFF" size={14} />
        </ProgressCircle>
        <ProgressCircle
          percent={30}
          radius={18}
          borderWidth={4}
          color="#F7DE85"
          shadowColor="#C75413"
          bgColor="#444"
        >
          <Icon name="school" type="material" color="#FFF" size={14} />
        </ProgressCircle>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
  };
};

export default connect(
  mapStateToProps,
  null,
)(TreatmentPlanFooter);
