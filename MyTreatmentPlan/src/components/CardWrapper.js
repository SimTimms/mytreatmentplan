import React from 'react';
import { styles } from '../styles';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

export const CardWrapper = props => {
  const innerBG =
    props.innerWrapper !== 'dark' ? props.gradient : ['#0A1828', '#0A1828'];
  return (
    <View>
      <LinearGradient
        colors={props.gradientBorder}
        style={{
          height: '100%',
          alignItems: 'center',
          borderRadius: 10,
          width: '100%',
          overflow: 'hidden',
          padding: 1,
        }}
      >
        <ImageBackground
          source={require('../assets/splash.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}
          imageStyle={{ borderRadius: 12 }}
        >
          <LinearGradient
            colors={innerBG}
            style={{
              height: '100%',
              alignItems: 'center',
              borderRadius: 10,
              width: '100%',
              opacity: 0.9,
            }}
          >
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.cardText}>{props.summary}</Text>
            {props.children}
          </LinearGradient>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};
