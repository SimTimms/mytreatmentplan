import React from 'react';
import { ApolloProvider } from 'react-apollo';
import SplashscreenLite from './src/views/SplashscreenLite';
import Diagnosis from './src/views/Diagnosis';
import BodyPart from './src/views/BodyPart';
import ContentLite from './src/views/ContentLite';
import DiagnosisContent from './src/views/DiagnosisContent';
import ExerciseContentLite from './src/views/ExerciseContentLite';
import Timeline from './src/views/Timeline';
import DashboardLite from './src/views/DashboardLite';
import DashboardMenu from './src/views/DashboardMenu';
import MenuArea from './src/views/Menu';
import { client } from './apolloConfig';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/store/reducers/';

const store = createStore(reducers);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'splash',
      diagnosisId: '5ad89784f3ed1c24fcbef9cf',
      bodyId: '5a7d745315f433032bdfae68',
      textInputData: '',
      exercises: [],
      treatmentPlans: ['5ad89784f3ed1c24fcbef9cf'],
      currentPlan: '5ad89784f3ed1c24fcbef9cf',
    };
  }

  async componentDidMount() {
    /*
    await AsyncStorage.getItem('exerciseArray').then(value =>
      this.setState({ exercises: value || [] }),
    );
    await AsyncStorage.getItem('tpArray').then(value =>
      this.setState({ treatmentPlans: value || [] }),
    );
    */
  }

  setValueLocally = exerciseId => {
    let exerciseArray = this.state.exercises;
    if (!exerciseArray.includes(exerciseId)) {
      exerciseArray = [...exerciseArray, exerciseId];
    }
    /*
    AsyncStorage.setItem('exerciseArray', exerciseArray).then(
      this.setState({ exercises: exerciseArray }),
    );*/
  };

  setTreatmentPlan = id => {
    /*
    AsyncStorage.setItem('currentPlan', id).then(
      this.setState({ }),
    );*/
    this.setState({ view: 'dashboard', currentPlan: id });
  };

  render() {
    function LoadView(props) {
      switch (props.view) {
        case 'diagnosis':
          return (
            <Diagnosis
              id={props.bodyId}
              setDiagnosis={setDiagnosis}
              changeView={changeView}
              style={{ flex: 1 }}
            />
          );

        case 'dashboard':
          return <DashboardLite changeView={changeView} />;

        case 'dashboardMenu':
          return (
            <DashboardMenu
              tpArray={props.treatmentPlans}
              setTreatmentPlan={props.setTreatmentPlan}
              menuClick={changeView}
              doneExercises={props.doneExercises}
            />
          );

        case 'affectedArea':
          return <BodyPart onClickVar={setBodyPart} changeView={changeView} />;

        case 'treatments':
          return (
            <ContentLite
              id={props.diagnosisId}
              typeName="treatments"
              typeId="5a82cb1c8ff6fb08a0334a9f"
              changeView={changeView}
            />
          );

        case 'exercises':
          return (
            <ExerciseContentLite
              id={props.currentPlan}
              typeName="exercises"
              changeView={changeView}
              doneExercises={props.doneExercises}
            />
          );

        case 'timeline':
          return (
            <Timeline
              id={props.diagnosisId}
              typeName="timeline"
              changeView={changeView}
            />
          );

        case 'referred':
          return (
            <ContentLite
              id={props.diagnosisId}
              typeName="referred"
              typeId="5a82cb1c8ff6fb08a0334a9c"
              changeView={changeView}
            />
          );

        case 'options':
          return (
            <ContentLite
              id={props.diagnosisId}
              typeName="optionsDiscussed"
              typeId="5a82cb1c8ff6fb08a0334a9c"
              changeView={changeView}
              colorScheme="#FFAF6D"
            />
          );

        case 'investigations':
          return (
            <ContentLite
              id={props.diagnosisId}
              typeName="investigations"
              typeId="5a82cb1c8ff6fb08a0334a9e"
              changeView={changeView}
            />
          );

        case 'diagnosisContent':
          return (
            <DiagnosisContent
              id={props.diagnosisId}
              changeView={changeView}
              colorScheme="#FF6D7F"
            />
          );

        case 'menu':
          return <MenuArea id={props.diagnosisId} onClickVar={viewSection} />;

        default:
          return (
            <SplashscreenLite
              changeView={changeView}
              tpArray={props.treatmentPlans}
            />
          );
      }
    }

    const changeView = view => {
      this.setState({ view });
    };

    const setBodyPart = id => {
      this.setState({ bodyId: id, view: 'diagnosis' });
    };

    const setDiagnosis = (id, __, name) => {
      let tpArray = this.state.treatmentPlans;
      if (!tpArray.includes({ id, name })) {
        tpArray = [...tpArray, { id, name }];
      }
      /*
      AsyncStorage.setItem('tpArray', tpArray);
      AsyncStorage.setItem('currentPlan', id);
*/
      this.setState({
        diagnosisId: id,
        view: 'dashboard',
        currentPlan: id,
        treatmentPlans: tpArray,
      });
    };

    const viewSection = (id, category) => {
      this.setState({ diagnosisId: id, view: category });
    };

    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <LoadView
            doneExercises={this.state.exercises}
            view={this.state.view}
            diagnosisId={this.state.diagnosisId}
            bodyId={this.state.bodyId}
            style={{ flex: 1, backgroundColor: '#222' }}
            setTreatmentPlan={this.setTreatmentPlan}
            treatmentPlans={this.state.treatmentPlans}
            currentPlan={this.state.currentPlan}
          />
        </ApolloProvider>
      </Provider>
    );
  }
}
