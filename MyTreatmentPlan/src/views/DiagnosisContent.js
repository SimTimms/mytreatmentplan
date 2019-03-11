import React from 'react';
import { Query } from 'react-apollo';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { styles } from '../styles';
import { Header, Icon } from 'react-native-elements';
import { SingleIconButton } from '../components/Buttons';
import { replaceHTMLTags } from '../helpers/index';
import { GET_DIAGNOSIS_CONTENT } from '../api/queries';
import InfoText from '../components/InfoText';
import { StyleSheet } from 'react-native';

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
              <SingleIconButton
                title="BACK"
                icon="chevron-left"
                colorScheme={this.props.colorScheme}
              />
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

              const page = data.publicDiagnosisContent.pages[0];
              const pageContent = page.content;

              return (
                <View>
                  <InfoText text={`Understanding your diagnosis`} />
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                    }}
                  >
                    {pageContent.map((contentItem, index) => {
                      if (contentItem.richText !== null) {
                        let contentStyle = StyleSheet.create({
                          blockStyle: {
                            backgroundColor: this.props.colorScheme,
                            padding: 10,
                            margin: 10,
                            borderRadius: 5,
                            color: '#FFF',
                          },
                        });
                        switch (contentItem.richText.type) {
                          case 'primary':
                            contentStyle = StyleSheet.create({
                              blockStyle: {
                                backgroundColor: this.props.colorScheme,
                                padding: 10,
                                borderRadius: 5,
                              },
                            });
                            return (
                              <View
                                key={`content-${index}`}
                                style={[
                                  contentStyle.blockStyle,
                                  {
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                  },
                                ]}
                              >
                                <Icon
                                  name="chat"
                                  type="material"
                                  color="#fff"
                                  size={62}
                                  style={{ flex: 0.3 }}
                                />
                                <Text
                                  style={{
                                    flex: 0.7,
                                    color: '#FFF',
                                    fontSize: 20,
                                  }}
                                >
                                  {replaceHTMLTags(contentItem.richText.text)}
                                </Text>
                              </View>
                            );
                            break;
                          case 'heading':
                            contentStyle = StyleSheet.create({
                              blockStyle: {
                                backgroundColor: '#fff',
                                borderRadius: 5,
                              },
                            });
                            return (
                              <View
                                key={`content-${index}`}
                                style={[
                                  contentStyle.blockStyle,
                                  {
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    marginTop: 20,
                                    marginBottom: 10,
                                  },
                                ]}
                              >
                                <Text
                                  key={`content-${index}`}
                                  style={{
                                    flex: 0.7,
                                    color: this.props.colorScheme,
                                    fontSize: 20,
                                  }}
                                >
                                  {replaceHTMLTags(contentItem.richText.text)}
                                </Text>
                                <Icon
                                  name="help-outline"
                                  type="material"
                                  color={this.props.colorScheme}
                                  size={62}
                                  style={{ flex: 0.3 }}
                                />
                              </View>
                            );
                            break;
                          case 'secondary-white':
                            contentStyle = StyleSheet.create({
                              blockStyle: {
                                backgroundColor: '#FFF',
                                padding: 10,
                                borderRadius: 5,
                                color: '#222',
                                fontSize: 16,
                              },
                            });
                            break;

                          case 'reference':
                            contentStyle = StyleSheet.create({
                              blockStyle: {
                                backgroundColor: '#ddd',
                                padding: 10,
                                color: '#777',
                                fontSize: 12,
                                marginTop: 20,
                              },
                            });
                            return (
                              <Text
                                style={contentStyle.blockStyle}
                                key={`content-${index}`}
                              >
                                {replaceHTMLTags(contentItem.richText.text)}
                              </Text>
                            );
                            break;

                          default:
                            contentStyle = StyleSheet.create({
                              blockStyle: {
                                backgroundColor: '#FFF',
                                padding: 10,
                                borderRadius: 5,
                                color: '#222',
                              },
                            });
                            break;
                        }
                        return (
                          <Text
                            style={contentStyle.blockStyle}
                            key={`content-${index}`}
                          >
                            {replaceHTMLTags(contentItem.richText.text)}
                          </Text>
                        );
                      }
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
