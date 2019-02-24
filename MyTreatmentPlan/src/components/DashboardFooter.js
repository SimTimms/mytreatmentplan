import React from 'react';
import { Icon } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DashboardFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.footerType) {
      case 'exercises':
        return (
          <View
            style={{
              paddingBottom: 10,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Icon
              name="fitness-center"
              type="material"
              color={this.props.gradientColor[0]}
              size={38}
            />

            <Text style={{ color: '#FFF', width: '100%' }}>
              {this.props.doneExercises.length} Exercises Complete
            </Text>
          </View>
        );

      case 'localServices':
        return (
          <View
            style={{
              paddingBottom: 10,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                name="location-on"
                type="material"
                color={this.props.gradientColor[0]}
                size={34}
                style={{ flex: 1 }}
              />
            </View>
            <Text style={{ color: '#FFF', width: '100%' }}>
              try something new
            </Text>
          </View>
        );

      case 'understanding':
        return (
          <View
            style={{
              paddingBottom: 10,
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProgressCircle
              percent={30}
              radius={18}
              borderWidth={4}
              color={this.props.gradientColor[0]}
              shadowColor={this.props.gradientColor[1]}
              bgColor="#444"
            >
              <Icon name="school" type="material" color="#FFF" size={14} />
            </ProgressCircle>
            <Text style={{ color: '#FFF', marginLeft: 10 }}>30%</Text>
          </View>
        );

      default:
        <View>
          <Text>Nothing</Text>
        </View>;
    }
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
)(DashboardFooter);
