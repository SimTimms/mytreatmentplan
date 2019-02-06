import React from 'react';
import { Query } from 'react-apollo';
import { StyleSheet, View, Text, ScrollView, WebView } from 'react-native';
import { gql } from 'apollo-boost';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';

const GET_CONTENT = gql`
  query diagnosisContent($id: String!) {
    publicDiagnosisContent(id: $id) {
      id
      name
      pages {
        title
        header {
          title
          subtitle
          icon
        }
        learnMoreTitle
        learnMoreMessage
        content {
          gallery {
            slides {
              name
              image
            }
          }
          richText {
            text
          }
        }
        orderNbr
      }
    }
  }
`;

export default class ContentArea extends React.Component {
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
            style: { color: '#fff' }
          }}
          containerStyle={{ backgroundColor: '#72b6fd' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView
          style={{
            flex: 1,
            width: '100%',
            margin: 10,
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <Query query={GET_CONTENT} variables={{ id: this.props.id }}>
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
                  <Text>{header}</Text>
                  <Text>
                    {pageContent.map(contentItem => {
                      if (contentItem.richText !== null) {
                        return (
                          <Text key={Math.random(100000)}>
                            {contentItem.richText.text}
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
