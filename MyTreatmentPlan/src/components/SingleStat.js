import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { styles } from '../styles/stats';

export const SingleIconStat = props => {
  return (
    <View style={styles.statWrapper}>
      <Text style={styles.statTitle}>{props.title}</Text>
      <View style={styles.statInnerWrapper}>
        <Icon
          name="star"
          type="material"
          color="#fff"
          size={42}
          style={{ zIndex: 0, flex: 1 }}
        />
        <Text style={styles.statContent}>{props.content}</Text>
      </View>
    </View>
  );
};

export const SingleStat = props => {
  return (
    <View style={styles.statWrapper}>
      <Text style={styles.statTitle}>{props.title}</Text>
      <View style={styles.statInnerWrapper}>
        <Text style={styles.statPrimaryContent}>{props.statNumber}</Text>
        <Text style={styles.statSecondaryContent}>{props.content}</Text>
      </View>
    </View>
  );
};
