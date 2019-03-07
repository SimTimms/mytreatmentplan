import React from 'react';
import { Query } from 'react-apollo';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { SingleIconButton } from '../components/Buttons';
import { replaceHTMLTags } from '../helpers/index';
import { GET_DIAGNOSIS_CONTENT } from '../api/queries';
import InfoText from '../components/InfoText';

export default class DiagnosisContent extends React.Component {
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
          <Query
            query={GET_DIAGNOSIS_CONTENT}
            variables={{ id: this.props.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

              const header = data.publicDiagnosisContent.name;
              const page = data.publicDiagnosisContent.pages[0];
              const pageContent = page.content;

              return (
                <View>
                  <InfoText text={`Understanding your diagnosis`} />
                  <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <Text>
                      {pageContent.map(contentItem => {
                        if (contentItem.richText !== null) {
                          return (
                            <Text key={Math.random(100000)}>
                              {replaceHTMLTags(contentItem.richText.text)}
                            </Text>
                          );
                        }
                      })}
                    </Text>
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
