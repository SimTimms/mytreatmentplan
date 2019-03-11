import React from 'react';
import { Query } from 'react-apollo';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { SingleIconButton } from '../components/Buttons';
import { GET_DIAGNOSIS_CONTENT } from '../api/queries';
import InfoText from '../components/InfoText';
import { SingleStat, SingleIconStat } from '../components/SingleStat';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={
            <TouchableOpacity
              style={{ marginLeft: 14 }}
              onPress={() => {
                this.props.changeView('dashboard');
              }}
            >
              <SingleIconButton title="BACK" icon="chevron-left" />
            </TouchableOpacity>
          }
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<Text>LOGO</Text>}
        />

        <ScrollView style={styles.scrollView}>
          <InfoText text={`Recovery Timeline`} />
          <Query
            query={GET_DIAGNOSIS_CONTENT}
            variables={{ id: this.props.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }
              console.log(data);
              const timeline = data.publicDiagnosisContent.timeline;

              return (
                <View>
                  <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                    {timeline.conditionFeature.map(feature => {
                      return (
                        <SingleIconStat
                          content="2"
                          title={feature.title}
                          icon="star"
                          key={feature.title}
                        />
                      );
                    })}
                  </View>
                </View>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}
