import React from 'react';
import { styles } from '../styles';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

export const CardWrapper = props => {
  const innerBG =
    props.innerWrapper !== 'dark' ? props.gradient : ['#0A1828', '#0A1828'];

  const innerHeight = props.parentStyle ? props.parentStyle.height - 42 : 100;

  return (
    <View>
      <LinearGradient
        colors={props.gradientBorder}
        style={{
          height: '100%',
          alignItems: 'center',
          borderRadius: 5,
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
          imageStyle={{ borderRadius: 5 }}
        >
          <Text style={styles.cardTitle}>{props.title}</Text>
          <LinearGradient
            colors={innerBG}
            style={{
              height: innerHeight,
              alignItems: 'center',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              width: '100%',
              opacity: 1,
              paddingBottom: 10,
            }}
          >
            <Text style={styles.cardText}>{props.summary}</Text>
            {props.children}
          </LinearGradient>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};
