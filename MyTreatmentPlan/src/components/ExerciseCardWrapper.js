import React from 'react';
import { styles } from '../styles';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

export const ExerciseCardWrapper = props => {
  const innerBG =
    props.innerWrapper !== 'dark' ? props.gradient : ['#0A1828', '#0A1828'];

  const innerHeight = props.parentStyle ? props.parentStyle.height : 100;

  return (
    <View>
      <View
        style={{
          backgroundColor: '#eee',
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
            backgroundColor: '#fff',
            height: innerHeight,
            alignItems: 'center',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            width: '100%',
            opacity: 0.9,
            paddingBottom: 10,
          }}
        >
          <Text style={styles.exerciseTitle}>{props.title}</Text>
          <Text style={styles.exerciseText}>{props.summary}</Text>
          {props.children}
        </View>
      </View>
    </View>
  );
};
