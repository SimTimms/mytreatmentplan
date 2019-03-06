import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function ExistingButton({ tpArray, clickButton }) {
      if (tpArray.length > 0) {
        return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              clickButton('dashboardMenu');
            }}
          >
            <Text style={styles.buttonText}>Existing</Text>
          </TouchableOpacity>
        );
      } else {
        return <View />;
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text
            style={{
              color: 'white',
              fontWeight: '300',
              fontSize: 26,
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '100%',
              paddingTop: 10,
              textAlign: 'center',
            }}
          >
            <Text style={{ color: '#72b6fd' }}>my</Text> treatment plan
          </Text>
          <Text
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontWeight: '300',
              fontSize: 16,
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '100%',
              paddingBottom: 10,
              textAlign: 'center',
            }}
          >
            recover yourself
          </Text>
          <Text
            style={{
              color: '#72b6fd',
              fontWeight: '300',
              fontSize: 16,
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '100%',
              paddingBottom: 10,
              textAlign: 'center',
            }}
          >
            MSK edition
          </Text>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '100%',
              paddingBottom: 10,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.onClickVar('affectedArea');
              }}
            >
              <Text style={styles.buttonText}>New Plan</Text>
            </TouchableOpacity>
            <ExistingButton
              tpArray={this.props.tpArray}
              clickButton={this.props.onClickVar}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 30,
    width: 176,
    margin: 12,
  },
  device: {
    height: 24,
    width: 28,
    marginTop: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#72b6fd',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
});
