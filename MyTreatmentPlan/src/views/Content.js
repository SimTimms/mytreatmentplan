import React from 'react';
import { Query } from 'react-apollo';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { replaceHTMLTags } from '../helpers/index';
import { FULL_CONTENT } from '../api/queries';

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
            style: { color: '#fff' },
          }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
          <Query
            query={FULL_CONTENT}
            variables={{ id: this.props.id, typeId: this.props.typeId }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

              const typeName = this.props.typeName;
              if (!data.getCommonPlan[typeName]) {
                return <Text>{`No ${typeName}`}</Text>;
              }

              return (
                <View>
                  {data.getCommonPlan.optionsResolved.map(page => {
                    const pageCategory = page.type.name;
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
                      <Text
                        style={{ fontWeight: 'bold' }}
                        key={Math.random(100000)}
                      >
                        {page.pages[0].header.title}
                      </Text>,
                      <Text key={Math.random(100000)}>{pageCategory}</Text>,
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
