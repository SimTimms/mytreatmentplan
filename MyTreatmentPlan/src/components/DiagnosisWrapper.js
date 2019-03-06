import React from 'react';
import { View } from 'react-native';

export const DiagnosisWrapper = props => {
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        overflow: 'hidden',
        padding: 25,
        backgroundColor: '#4a4a4a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.children}
    </View>
  );
};
