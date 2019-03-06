import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SplashscreenStyles } from '../styles/splashScreen';
import { SingleIconButton } from '../components/Buttons';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={SplashscreenStyles.container}>
        <View style={SplashscreenStyles.container}>
          <Text style={SplashscreenStyles.logoText}>
            <Text style={{ color: '#72b6fd' }}>my</Text> treatment plan
          </Text>
          <TouchableOpacity
            style={SplashscreenStyles.buttonWrapper}
            onPress={() => {
              this.props.changeView('affectedArea');
            }}
          >
            <SingleIconButton title="START" icon="play-arrow" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
