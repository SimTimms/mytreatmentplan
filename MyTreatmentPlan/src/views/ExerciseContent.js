import React from 'react';
import { Query } from 'react-apollo';
import { View, Text, ScrollView, Image, WebView } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { FULL_CONTENT } from '../api/queries';

export default class ExerciseContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'Exercises',
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: '#72b6fd' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
          <Query
            query={FULL_CONTENT}
            variables={{ id: this.props.id, typeId: '' }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

              if (!data.getCommonPlan[0].exerciseDetails) {
                return <Text>{`No Exercises`}</Text>;
              }

              return (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  {data.getCommonPlan[0].exerciseDetails.map(exercise => {
                    const exerciseName = exercise.name;
                    const exerciseDescription = exercise.description;

                    return (
                      <View
                        key={exercise.id}
                        style={{
                          flex: 1,
                          flexDirection: 'column',
                          paddingBottom: 20,
                          borderRadius: 4,
                          borderWidth: 0.5,
                          borderColor: '#ddd',
                          marginBottom: 20,
                          shadowColor: '#000',
                          shadowOffset: { width: 10, height: 10 },
                          shadowOpacity: 20,
                          shadowRadius: 10,
                        }}
                      >
                        <WebView
                          source={{
                            uri: exercise.videos[0],
                          }}
                          style={{ height: 200, marginBottom: 20 }}
                        />
                        <View
                          key={exercise.id}
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            textAlign: 'center',
                          }}
                        >
                          <Text
                            style={{ fontWeight: 'bold', textAlign: 'center' }}
                            key={Math.random(100000)}
                          >
                            {exerciseName}
                          </Text>
                          <Text
                            style={{ textAlign: 'center' }}
                            key={Math.random(100000)}
                          >
                            {exerciseDescription}
                          </Text>
                        </View>
                      </View>
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
