import React from 'react';
import { Query } from 'react-apollo';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { replaceHTMLTags } from '../helpers/index';
import { GET_DIAGNOSIS_CONTENT } from '../api/queries';

export default class DiagnosisContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'Information',
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
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
                  <Text style={{ fontWeight: 'bold' }}>{header}</Text>
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
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}
