import React from 'react';
import { styles } from '../styles';
import { View, Text, ImageBackground } from 'react-native';

export const ExerciseWrapper = props => {
  const innerHeight = props.parentStyle ? props.parentStyle.height - 72 : 100;

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        overflow: 'hidden',
        padding: 5,
        backgroundColor: '#4a4a4a',
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
        <View
          style={{
            height: innerHeight,
            alignItems: 'center',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20,
            width: '100%',
            opacity: 1,
            paddingBottom: 10,
            backgroundColor: '#4a4a4a',
          }}
        >
          <Text style={styles.cardText}>{props.summary}</Text>
          {props.children}
        </View>
      </ImageBackground>
    </View>
  );
};
