import React from 'react';
import { Icon } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle';
import { View, Text } from 'react-native';

export const CardFooter = props => {
  {
    switch (props.footerType) {
      case 'Exercises':
        const streak = Math.floor(Math.random() * 10);
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
            <Icon name="star" type="material" color="#FFF" size={30} />

            <Text
              style={{ color: '#FFF', marginLeft: 2 }}
            >{`${streak} Day Streak`}</Text>
          </View>
        );

      case 'bodyPart':
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
            <Icon name="check-circle" type="material" color="#FFF" size={24} />
          </View>
        );

      default:
        const progressValue = Math.floor(Math.random() * 100) + 1;
        let isReading =
          progressValue < 10
            ? 'Start'
            : progressValue > 60
            ? 'Done'
            : 'Continue';
        let icon =
          progressValue < 10
            ? 'play-arrow'
            : progressValue > 60
            ? 'star'
            : 'more-horiz';
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
              percent={progressValue}
              radius={18}
              borderWidth={4}
              color="#FFF"
              shadowColor={props.gradientColor[1]}
              bgColor={props.gradientColor[0]}
            >
              <Icon name={icon} type="material" color="#FFF" size={14} />
            </ProgressCircle>
            <Text style={{ color: '#FFF', marginLeft: 10 }}>{isReading}</Text>
          </View>
        );
    }
  }
};
