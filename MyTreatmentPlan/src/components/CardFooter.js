import React from 'react';
import { Icon } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle';
import { View, Text } from 'react-native';

export const CardFooter = () => {
  return (
    <View style={{ paddingBottom: 10 }}>
      <ProgressCircle
        percent={30}
        radius={18}
        borderWidth={4}
        color="#FFF"
        shadowColor="#F5935E"
        bgColor="#FF9F6B"
      >
        <Icon name="book" color="#FFF" size={14} />
        <Text style={{ color: '#FFF' }}>Read</Text>
      </ProgressCircle>
    </View>
  );
};
