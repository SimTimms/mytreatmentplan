import React from 'react';
import { Query } from 'react-apollo';
import { styles } from '../styles';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { GET_DIAGNOSIS } from '../api/queries';

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
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: '#72b6fd' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
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
