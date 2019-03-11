import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { styles } from '../styles/buttons';

export const SingleIconButton = props => {
  let bgColor = '#4a4a4a';
  if (props.colorScheme) {
    bgColor = props.colorScheme;
  }
  return (
    <View style={[styles.buttonWrapper, props.addCSS]}>
      <View style={[styles.buttonInnerWrapper, { backgroundColor: bgColor }]}>
        <Icon
          name={props.icon}
          type="material"
          color="#fff"
          size={32}
          style={{ flex: 1 }}
        />
      </View>
      <Text style={[styles.buttonTitle, { color: bgColor }]}>
        {props.title}
      </Text>
    </View>
  );
};
