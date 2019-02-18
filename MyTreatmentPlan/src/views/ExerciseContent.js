import React from 'react';
import { Query } from 'react-apollo';
import {
  View,
  Text,
  ScrollView,
  WebView,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { FULL_CONTENT } from '../api/queries';
import { CardFooter } from '../components/CardFooter';
import { CardWrapper } from '../components/CardWrapper';

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
            style: { color: '#FFF' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
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
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  {data.getCommonPlan[0].exerciseDetails.map(
                    (exercise, index) => {
                      //TODO: BAD BAD BAD, fix this later with an alogrthm
                      const colorArray = [
                        ['#FAD961', '#F76B1C'],
                        ['#6BE7FF', '#8DBBFF'],
                        ['#B4EC51', '#429321'],
                        ['#C86DD7', '#3023AE'],
                        ['#F5515F', '#9F041B'],
                        ['#FAD961', '#F76B1C'],
                        ['#6BE7FF', '#8DBBFF'],
                        ['#B4EC51', '#429321'],
                        ['#C86DD7', '#3023AE'],
                        ['#F5515F', '#9F041B'],
                        ['#FAD961', '#F76B1C'],
                        ['#6BE7FF', '#8DBBFF'],
                        ['#B4EC51', '#429321'],
                        ['#C86DD7', '#3023AE'],
                      ];
                      const borderArray = [
                        ['#F7DE85', '#C75413'],
                        ['#A6F1FF', '#5185D0'],
                        ['#CCEF8D', '#326D1A'],
                        ['#C86DD7', '#241987'],
                        ['#F5838C', '#700313'],
                        ['#F7DE85', '#C75413'],
                        ['#A6F1FF', '#5185D0'],
                        ['#CCEF8D', '#326D1A'],
                        ['#C86DD7', '#241987'],
                        ['#F5838C', '#700313'],
                        ['#F7DE85', '#C75413'],
                        ['#A6F1FF', '#5185D0'],
                        ['#CCEF8D', '#326D1A'],
                        ['#C86DD7', '#241987'],
                        ['#F5838C', '#700313'],
                      ];

                      let gradient = colorArray[index];
                      let gradientBorder = borderArray[index];

                      const exerciseName = exercise.name;
                      const exerciseDescription = exercise.description;

                      return (
                        <TouchableOpacity
                          style={[styles.card, styles.exerciseCard]}
                          key={exercise.id}
                        >
                          <CardWrapper
                            onClickVar={this.props.onClickVar}
                            objectIn={exercise}
                            gradientBorder={gradientBorder}
                            gradient={gradient}
                            title={exerciseName}
                            summary={exerciseDescription}
                            style={{ flex: 1, width: 200 }}
                            innerWrapper="dark"
                          >
                            <View
                              style={{
                                width: '100%',
                                height: 200,
                                overflow: 'hidden',
                              }}
                            >
                              <WebView
                                source={{
                                  uri: exercise.videos[0],
                                }}
                                style={{ height: 200, marginBottom: 20 }}
                              />
                            </View>
                          </CardWrapper>
                        </TouchableOpacity>
                      );
                    },
                  )}
                </View>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}
