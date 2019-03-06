import React from 'react';
import { View } from 'react-native';

export default class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
