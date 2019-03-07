import React from 'react';
import { styles } from '../styles';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SingleIconButton } from '../components/Buttons';
import InfoText from '../components/InfoText';
import PageWrapper from '../components/PageWrapper';
import ImageCard from '../components/ImageCard';

export default class App extends React.Component {
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
                this.props.changeView('diagnosis');
              }}
            >
              <SingleIconButton title="BACK" icon="chevron-left" />
            </TouchableOpacity>
          }
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<Text>LOGO</Text>}
        />
        <ScrollView style={styles.scrollView}>
          <InfoText text="Your treatment plan" />
          <PageWrapper>
            <ImageCard
              importStyle={[styles.card, styles.bodyPartCard]}
              importKey="understand-id"
              pressAction={() => {
                this.props.changeView('diagnosisContent');
              }}
              parentStyle={styles.bodyPartCard}
              bgColor="#4a4a4a"
              borderColor="#FF6D7F"
              text="Understand"
              bgImage={'splash'}
            />
            <ImageCard
              importStyle={[styles.card, styles.bodyPartCard]}
              importKey="recover-id"
              pressAction={() => {
                this.props.changeView('options');
              }}
              parentStyle={styles.bodyPartCard}
              bgColor="#4a4a4a"
              borderColor="#FFAF6D"
              text="Recover"
              bgImage={'splash'}
            />
            <ImageCard
              importStyle={[styles.card, styles.bodyPartCard]}
              importKey="investigate-id"
              pressAction={() => {
                this.props.changeView('investigations');
              }}
              parentStyle={styles.bodyPartCard}
              bgColor="#4a4a4a"
              borderColor="#6DFFE2"
              text="Investigate"
              bgImage={'splash'}
            />
            <ImageCard
              importStyle={[styles.card, styles.bodyPartCard]}
              importKey="exercise-id"
              pressAction={() => {
                this.props.changeView('exercises');
              }}
              parentStyle={styles.bodyPartCard}
              bgColor="#4a4a4a"
              borderColor="#6DAEFF"
              text="Exercise"
              bgImage={'splash'}
            />
          </PageWrapper>
        </ScrollView>
      </View>
    );
  }
}
