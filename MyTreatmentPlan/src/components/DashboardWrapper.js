import React from 'react';
import { styles } from '../styles';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

export const DashboardWrapper = props => {
  const innerBG =
    props.innerWrapper !== 'dark' ? props.gradient : ['#0A1828', '#0A1828'];

  const innerHeight = props.parentStyle ? props.parentStyle.height - 4 : 100;

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <LinearGradient
        colors={innerBG}
        style={{
          height: innerHeight,
          alignItems: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          width: '100%',
          opacity: 1,
          paddingBottom: 20,
        }}
      >
        <Text style={styles.cardTitle}>{props.title}</Text>
        {props.children}
      </LinearGradient>
    </View>
  );
};
