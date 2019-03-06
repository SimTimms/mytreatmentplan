import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { styles } from '../styles/buttons';

export const SingleIconButton = props => {
  return (
    <View style={[styles.buttonWrapper, props.addCSS]}>
      <View style={styles.buttonInnerWrapper}>
        <Icon
          name={props.icon}
          type="material"
          color="#fff"
          size={32}
          style={{ flex: 1 }}
        />
      </View>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </View>
  );
};
