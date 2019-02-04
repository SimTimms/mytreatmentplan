import React from 'react';
import { Query } from 'react-apollo';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { gql } from 'apollo-boost';

const GET_DIAGNOSIS = gql`
  {
    diagnosisOptions {
      name
    }
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Select a Diagnosis!</Text>
        </View>
        <ScrollView>
          <Query query={GET_DIAGNOSIS}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loadidng...</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

              return data.diagnosisOptions.map(diagnosis => {
                console.log(diagnosis);
                return (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.props.onClickVar('home');
                    }}
                    key={diagnosis.id}
                  >
                    <Text style={styles.buttonText}>{diagnosis.name}</Text>
                  </TouchableOpacity>
                );
              });
            }}
          </Query>
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
