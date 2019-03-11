import React from 'react';
import { Query } from 'react-apollo';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import InfoText from '../components/InfoText';
import { SingleIconButton } from '../components/Buttons';
import { replaceHTMLTags } from '../helpers/index';
import { FULL_CONTENT } from '../api/queries';

export default class ContentLite extends React.Component {
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
            query={FULL_CONTENT}
            variables={{ id: this.props.id, typeId: this.props.typeId }}
          >
            {({ loading, error, data }) => {
              if (loading)
                return <Text key={Math.random(100000)}>Loading...</Text>;
              if (error) {
                return (
                  <Text key={Math.random(100000)}>{error.toString()}</Text>
                );
              }
              console.log(this.props.id, data);
              const typeName = this.props.typeName;
              if (!data.getCommonPlan[0][typeName]) {
                return (
                  <View
                    style={{ paddingLeft: 30, paddingRight: 30 }}
                    key={Math.random(100000)}
                  >
                    <Text>{`No ${typeName}`}</Text>
                  </View>
                );
              }

              return (
                <View
                  style={{ paddingLeft: 30, paddingRight: 30 }}
                  key={Math.random(100000)}
                >
                  {data.getCommonPlan[0][typeName].map(page => {
                    const pageContent = page.pages[0].content.map(
                      contentItem => {
                        if (contentItem.richText !== null) {
                          return (
                            <Text key={Math.random(100000)}>
                              {replaceHTMLTags(contentItem.richText.text)}
                            </Text>
                          );
                        }
                      },
                    );

                    return [
                      <InfoText
                        text={page.pages[0].header.title}
                        key={Math.random(100000)}
                      />,
                      ,
                      ...pageContent,
                    ];
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
