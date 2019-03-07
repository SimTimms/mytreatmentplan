import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import {
  View,
  Text,
  ScrollView,
  WebView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { FULL_CONTENT } from '../api/queries';

import { SingleIconButton } from '../components/Buttons';
import { ExerciseFooter } from '../components/ExerciseFooter';
import { ExerciseCardWrapper } from '../components/ExerciseCardWrapper';
import { exerciseSubmit } from '../store/actions';

class ExerciseContent extends React.Component {
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
            text: 'Exercises',
            style: { color: '#FFF' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={{ width: '100%', height: '100%', flex: 1 }}
        >
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
                        let colorBorder = '#6BE7FF';
                        let bgColor = '#FFF';

                        const exerciseName = exercise.name;
                        const exerciseDescription = exercise.description;
                        const exerciseDone = this.props.doneExercises
                          ? this.props.doneExercises.includes(exercise.id)
                          : false;

                        return (
                          <TouchableOpacity
                            style={[styles.card, styles.exerciseCard]}
                            key={exercise.id}
                            onPress={() => {
                              this.props.exerciseSubmit(exercise.id);
                            }}
                          >
                            <ExerciseCardWrapper
                              parentStyle={styles.exerciseCard}
                              onClickVar={this.props.onClickVar}
                              objectIn={exercise}
                              borderColor={colorBorder}
                              bgColor={bgColor}
                              title={exerciseName}
                              summary={exerciseDescription}
                              style={{ flex: 1, width: 200 }}
                            >
                              <View
                                style={{
                                  width: '100%',
                                  height: 148,
                                  overflow: 'hidden',
                                }}
                              >
                                <WebView
                                  source={{
                                    uri: exercise.videos[0],
                                  }}
                                  style={{ height: 148 }}
                                />
                              </View>
                              <ExerciseFooter
                                gradientColor={bgColor}
                                footerType="exercise"
                                checked={exerciseDone}
                                style={{
                                  marginTop: -80,
                                  width: 50,
                                }}
                              />
                            </ExerciseCardWrapper>
                          </TouchableOpacity>
                        );
                      },
                    )}
                  </View>
                );
              }}
            </Query>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    id: ownProps.id,
    typeName: ownProps.typeName,
    onClickVar: ownProps.onClickVar,
    doneExercises: state.exercises,
  };
};

export default connect(
  mapStateToProps,
  { exerciseSubmit },
)(ExerciseContent);
