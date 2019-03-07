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
import InfoText from '../components/InfoText';
import WarningText from '../components/WarningText';
import { ExerciseFooter } from '../components/ExerciseFooter';
import { ExerciseCardWrapper } from '../components/ExerciseCardWrapper';
import PageWrapper from '../components/PageWrapper';

export default class ExerciseContentLite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
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
          <WarningText
            text={`Please be careful while exercising, if you experience any difficulty or pain stop immediately.`}
          />
          <InfoText text={`Gentle Exercises`} />
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
                <PageWrapper>
                  {data.getCommonPlan[0].exerciseDetails.map(exercise => {
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
                          bgColor="#4a4a4a"
                          borderColor="#FFAF6D"
                          title={exerciseName}
                          summary={exerciseDescription}
                          style={{ flex: 1, width: 200 }}
                        >
                          <View
                            style={{
                              width: '50%',
                              height: 80,
                            }}
                          >
                            <WebView
                              source={{
                                uri: exercise.videos[0],
                              }}
                              style={{ height: 148 }}
                            />
                          </View>
                        </ExerciseCardWrapper>
                      </TouchableOpacity>
                    );
                  })}
                </PageWrapper>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}
