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
          backgroundColor: '#EDEDED',
          borderRadius: 5,
          paddingTop: 15,
          paddingBottom: 15,
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 10,
          width: '90%',
        }}
      >
        {this.props.text}
      </Text>
    );
  }
}
