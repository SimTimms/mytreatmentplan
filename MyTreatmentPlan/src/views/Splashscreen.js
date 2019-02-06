import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: '#FFF' }}
          leftComponent={
            <Image
              style={styles.device}
              source={require('../assets/mtp-device.png')}
            />
          }
        />
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/mtp.png')} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.onClickVar('affectedArea');
            }}
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 30,
    width: 176,
    margin: 12
  },
  device: {
    height: 10,
    width: 37,
    marginTop: 12,
    marginBottom: 12
  },
  button: {
    backgroundColor: '#fafafa',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    margin: 40
  },
  buttonText: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '300'
  }
});
