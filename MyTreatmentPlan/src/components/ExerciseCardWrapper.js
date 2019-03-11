import React from 'react';
import { styles } from '../styles';
import { View, Text } from 'react-native';

export const ExerciseCardWrapper = props => {
  const innerHeight = props.parentStyle ? props.parentStyle.height : 100;

  return (
    <View
      style={{
        backgroundColor: props.borderColor,
        height: '100%',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <View
        style={{
          height: innerHeight,
          alignItems: 'center',
          borderRadius: 10,
          width: '100%',
          backgroundColor: props.bgColor,
          flex: 1,
          flexDirection: 'row',
        }}
      >
        {props.children}
        <View style={{ width: '50%', padding: 5 }}>
          <Text style={styles.exerciseTitle}>{props.title}</Text>
          <Text style={styles.exerciseText}>{props.summary}</Text>
        </View>
      </View>
    </View>
  );
};
