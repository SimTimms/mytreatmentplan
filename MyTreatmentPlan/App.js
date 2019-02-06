import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Splashscreen from './src/views/Splashscreen';
import Diagnosis from './src/views/Diagnosis';
import BodyPart from './src/views/BodyPart';
import ContentArea from './src/views/Content';

const client = new ApolloClient({
  uri: 'https://clinic-api-dev.herokuapp.com/graphql'
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'splash', diagnosisId: null };
  }

  render() {
    function LoadView(props) {
      if (props.diagnosisId === null) {
        switch (props.view) {
          case 'diagnosis':
            return <Diagnosis onClickVar={setDiagnosis} />;

          case 'affectedArea':
            return <BodyPart onClickVar={changeView} />;

          default:
            return <Splashscreen onClickVar={changeView} />;
        }
      } else {
        return <ContentArea id={props.diagnosisId} onClickVar={changeView} />;
      }
    }

    const changeView = view => {
      this.setState({ diagnosisId: null, view });
    };

    const setDiagnosis = id => {
      this.setState({ diagnosisId: id });
    };

    return (
      <ApolloProvider client={client}>
        <LoadView view={this.state.view} diagnosisId={this.state.diagnosisId} />
      </ApolloProvider>
    );
  }
}
