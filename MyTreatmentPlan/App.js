import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Splashscreen from './src/views/Splashscreen';
import Diagnosis from './src/views/Diagnosis';
import BodyPart from './src/views/BodyPart';
import ContentArea from './src/views/Content';
import DiagnosisContent from './src/views/DiagnosisContent';
import ExerciseContent from './src/views/ExerciseContent';
import Dashboard from './src/views/Dashboard';
import DashboardMenu from './src/views/DashboardMenu';
import MenuArea from './src/views/Menu';
import { client } from './apolloConfig';
import { AsyncStorage } from 'react-native';
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
      treatmentPlans: [],
      currentPlan: null,
    };
  }

  async componentDidMount() {
    await AsyncStorage.getItem('exerciseArray').then(value =>
      this.setState({ exercises: value || [] }),
    );
    await AsyncStorage.getItem('tpArray').then(value =>
      this.setState({ treatmentPlans: value || [] }),
    );
  }

  setValueLocally = exerciseId => {
    let exerciseArray = this.state.exercises;
    if (!exerciseArray.includes(exerciseId)) {
      exerciseArray = [...exerciseArray, exerciseId];
    }
    AsyncStorage.setItem('exerciseArray', exerciseArray).then(
      this.setState({ exercises: exerciseArray }),
    );
  };

  setTreatmentPlan = id => {
    console.log(id);
    AsyncStorage.setItem('currentPlan', id).then(
      this.setState({ currentPlan: id }),
    );
    this.setState({ view: 'dashboard' });
  };

  render() {
    function LoadView(props) {
      switch (props.view) {
        case 'diagnosis':
          return (
            <Diagnosis
              id={props.bodyId}
              setDiagnosis={setDiagnosis}
              rightMenu={changeView}
              style={{ flex: 1 }}
            />
          );

        case 'dashboard':
          return <Dashboard onClickVar={changeView} menuClick={changeView} />;

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
          return <BodyPart onClickVar={setBodyPart} menuClick={changeView} />;

        case 'treatments':
          return (
            <ContentArea
              id={props.diagnosisId}
              typeName="treatments"
              typeId="5a82cb1c8ff6fb08a0334a9c"
              onClickVar={changeView}
            />
          );

        case 'exercises':
          return (
            <ExerciseContent
              id={props.currentPlan}
              typeName="exercises"
              onClickVar={changeView}
              doneExercises={props.doneExercises}
            />
          );

        case 'referred':
          return (
            <ContentArea
              id={props.diagnosisId}
              typeName="referred"
              typeId="5a82cb1c8ff6fb08a0334a9c"
              onClickVar={changeView}
            />
          );

        case 'options':
          return (
            <ContentArea
              id={props.diagnosisId}
              typeName="options"
              typeId="5a82cb1c8ff6fb08a0334a9c"
              onClickVar={changeView}
            />
          );

        case 'investigations':
          return (
            <ContentArea
              id={props.diagnosisId}
              typeName="investigations"
              typeId="5a82cb1c8ff6fb08a0334a9c"
              onClickVar={changeView}
            />
          );

        case 'diagnosisContent':
          return (
            <DiagnosisContent id={props.diagnosisId} onClickVar={changeView} />
          );

        case 'menu':
          return <MenuArea id={props.diagnosisId} onClickVar={viewSection} />;

        default:
          return (
            <Splashscreen
              onClickVar={changeView}
              tpArray={props.treatmentPlans}
            />
          );
      }
    }

    const changeView = view => {
      this.setState({ diagnosisId: null, view });
    };

    const setBodyPart = id => {
      this.setState({ bodyId: id, view: 'diagnosis' });
    };

    const setDiagnosis = (id, __, name) => {
      let tpArray = this.state.treatmentPlans;
      if (!tpArray.includes({ id, name })) {
        tpArray = [...tpArray, { id, name }];
      }

      AsyncStorage.setItem('tpArray', tpArray).then(
        this.setState({ treatmentPlans: tpArray }),
      );
      AsyncStorage.setItem('currentPlan', id).then(
        this.setState({ currentPlan: id }),
      );

      this.setState({ diagnosisId: id, view: 'dashboard' });
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
