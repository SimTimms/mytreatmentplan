import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Button } from 'react-native-elements';
const client = new ApolloClient({
  uri: 'https://mobileprod.mskassist.com/graphql',
});

const GET_DIAGNOSIS = gql`
  {
    diagnosisOptions {
      name
    }
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
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

              console.log(data.diagnosisOptions);
              return data.diagnosisOptions.map(diagnosis => {
                return <Button title={diagnosis.name} />;
              });
            }}
          </Query>
        </ScrollView>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
