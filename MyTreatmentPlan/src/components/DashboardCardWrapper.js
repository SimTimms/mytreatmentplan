import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export const DashboardCardWrapper = props => {
  const innerHeight = props.parentStyle ? props.parentStyle.height - 82 : 100;

  const getImage = image => {
    if (image === 'splash') {
      return require('../assets/splash.jpg');
    }
  };
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        overflow: 'hidden',
        padding: 2,
        backgroundColor: props.borderColor,
      }}
    >
      <ImageBackground
        source={getImage(props.bgImage)}
        style={{
          width: '100%',
          height: '100%',
        }}
        imageStyle={{ borderRadius: 5 }}
      >
        <View
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
            backgroundColor: props.bgColor,
            marginTop: 'auto',
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 14,
              width: '100%',
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            {props.text}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
