import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Splashscreen from './src/views/Splashscreen';
import Diagnosis from './src/views/Diagnosis';
import BodyPart from './src/views/BodyPart';
import ContentArea from './src/views/Content';
import MenuArea from './src/views/Menu';
import { client } from './apolloConfig';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'splash', diagnosisId: null };
  }

  render() {
    function LoadView(props) {
      switch (props.view) {
        case 'diagnosis':
          return <Diagnosis onClickVar={setDiagnosis} />;

        case 'affectedArea':
          return <BodyPart onClickVar={changeView} />;

        case 'treatments':
          return <ContentArea id={props.diagnosisId} onClickVar={changeView} />;

        case 'exercises':
          return <ContentArea id={props.diagnosisId} onClickVar={changeView} />;

        case 'referred':
          return <ContentArea id={props.diagnosisId} onClickVar={changeView} />;

        case 'options':
          return <ContentArea id={props.diagnosisId} onClickVar={changeView} />;

        case 'investigations':
          return <ContentArea id={props.diagnosisId} onClickVar={changeView} />;

        case 'menu':
          return <MenuArea id={props.diagnosisId} onClickVar={viewSection} />;

        default:
          return <Splashscreen onClickVar={changeView} />;
      }
    }

    const changeView = view => {
      this.setState({ diagnosisId: null, view });
    };

    const setDiagnosis = id => {
      this.setState({ diagnosisId: id, view: 'menu' });
    };

    const viewSection = (id, category) => {
      this.setState({ diagnosisId: id, view: category });
    };

    return (
      <ApolloProvider client={client}>
        <LoadView view={this.state.view} diagnosisId={this.state.diagnosisId} />
      </ApolloProvider>
    );
  }
}
