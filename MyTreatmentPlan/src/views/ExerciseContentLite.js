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
import { FULL_CONTENT } from '../api/queries';
import { SingleIconButton } from '../components/Buttons';
import InfoText from '../components/InfoText';
import WarningText from '../components/WarningText';
import { ExerciseCardWrapper } from '../components/ExerciseCardWrapper';
import PageWrapper from '../components/PageWrapper';

export default class ExerciseContentLite extends React.Component {
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
                    console.log(exercise.videos[0]);
                    const exerciseName = exercise.name;
                    const exerciseDescription = exercise.description;

                    return (
                      <View
                        style={[styles.card, styles.exerciseCard]}
                        key={exercise.id}
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
                          <WebView
                            source={{
                              uri: exercise.videos[0],
                            }}
                            style={{ height: 60, width: '90%', marginLeft: 5 }}
                          />
                        </ExerciseCardWrapper>
                      </View>
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
