import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Splashscreen from './src/views/Splashscreen';
import Diagnosis from './src/views/Diagnosis';
import BodyPart from './src/views/BodyPart';
import ContentArea from './src/views/Content';
import DiagnosisContent from './src/views/DiagnosisContent';
import ExerciseContent from './src/views/ExerciseContent';
import MenuArea from './src/views/Menu';
import { client } from './apolloConfig';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'menu',
      diagnosisId: '5ad89784f3ed1c24fcbef9cf',
      bodyId: '5a7d745315f433032bdfae68',
    };
  }

  render() {
    function LoadView(props) {
      switch (props.view) {
        case 'diagnosis':
          return (
            <Diagnosis
              id={props.bodyId}
              onClickVar={setDiagnosis}
              style={{ flex: 1 }}
            />
          );

        case 'affectedArea':
          return <BodyPart onClickVar={setBodyPart} />;

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
          console.log(props);
          return (
            <ExerciseContent
              id={props.diagnosisId}
              typeName="exercises"
              onClickVar={changeView}
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
          return <Splashscreen onClickVar={changeView} />;
      }
    }

    const changeView = view => {
      this.setState({ diagnosisId: null, view });
    };

    const setBodyPart = id => {
      this.setState({ bodyId: id, view: 'diagnosis' });
    };

    const setDiagnosis = id => {
      this.setState({ diagnosisId: id, view: 'menu' });
    };

    const viewSection = (id, category) => {
      this.setState({ diagnosisId: id, view: category });
    };

    return (
      <ApolloProvider client={client}>
        <LoadView
          view={this.state.view}
          diagnosisId={this.state.diagnosisId}
          bodyId={this.state.bodyId}
          style={{ flex: 1, backgroundColor: '#222' }}
        />
      </ApolloProvider>
    );
  }
}
