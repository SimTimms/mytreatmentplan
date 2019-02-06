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
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';

const GET_DIAGNOSIS = gql`
  {
    diagnosisOptions {
      id
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
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'What is your diagnosis?',
            style: { color: '#fff' }
          }}
          containerStyle={{ backgroundColor: '#72b6fd' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <Query query={GET_DIAGNOSIS}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

              return data.diagnosisOptions.map(diagnosis => {
                return (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.props.onClickVar(diagnosis.id);
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
