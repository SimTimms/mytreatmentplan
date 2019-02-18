import React from 'react';
import { Query } from 'react-apollo';
import { styles } from '../styles';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { GET_DIAGNOSIS } from '../api/queries';
import { LinearGradient } from 'expo';
import { CardFooter } from '../components/CardFooter';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'What is your diagnosis?',
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
          <Query query={GET_DIAGNOSIS} variables={{ id: this.props.id }}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading....</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

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
                  {data.publicBodyPart.options.map(diagnosis => {
                    return (
                      <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                          this.props.onClickVar(diagnosis.id);
                        }}
                        key={diagnosis.id}
                      >
                        <LinearGradient
                          colors={['#FFC16B', '#FFA78D']}
                          style={{
                            height: '100%',
                            alignItems: 'center',
                          }}
                        >
                          <Text style={styles.cardTitle}>{diagnosis.name}</Text>
                          <Text style={styles.cardText}>Summary text here</Text>
                          <CardFooter />
                        </LinearGradient>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}
