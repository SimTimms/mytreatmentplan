import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const TopMenuBar = props => {
  return (
    <Button
      icon={<Icon name="home" size={16} color="white" />}
      iconRight
      onPress={() => {
        props.onClickAction('splash');
      }}
      buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
    />
  );
};
