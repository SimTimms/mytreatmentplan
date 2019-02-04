import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { bodyParts } from '../data/bodyParts';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Where is affected?</Text>
        </View>
        <ScrollView>
          {bodyParts.map(bodyPart => {
            return (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.onClickVar('diagnosis');
                }}
                key={bodyPart}
              >
                <Text style={styles.buttonText}>{bodyPart}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    height: 32,
    width: 180
  },
  button: {
    backgroundColor: '#fafafa',
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    margin: 0
  },
  buttonText: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '300'
  }
});