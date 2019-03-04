import React from 'react';
import { styles } from '../styles';
import { View, Text } from 'react-native';

export const ExerciseCardWrapper = props => {
  const innerHeight = props.parentStyle ? props.parentStyle.height : 100;

  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: '100%',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        overflow: 'hidden',
        padding: 1,
      }}
    >
      <View
        style={{
          height: innerHeight,
          alignItems: 'center',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          width: '100%',
          paddingBottom: 10,
        }}
      >
        <Text style={styles.exerciseTitle}>{props.title}</Text>
        <Text style={styles.exerciseText}>{props.summary}</Text>
        {props.children}
      </View>
    </View>
  );
};
