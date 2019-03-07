import React from 'react';
import { Text } from 'react-native';

export default class InfoText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text
        style={{
          backgroundColor: '#FF6D7F',
          borderRadius: 5,
          paddingTop: 15,
          paddingBottom: 15,
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 20,
          width: '90%',
          color: '#FFF',
        }}
      >
        {this.props.text}
      </Text>
    );
  }
}
