import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Splashscreen from './src/views/Splashscreen';
import Diagnosis from './src/views/Diagnosis';
import BodyPart from './src/views/BodyPart';

const client = new ApolloClient({
  uri: 'https://mobileprod.mskassist.com/graphql'
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'splash' };
  }

  render() {
    const loadView = view => {
      switch (view) {
        case 'diagnosis':
          return <Diagnosis onClickVar={changeView} />;

        case 'affectedArea':
          return <BodyPart onClickVar={changeView} />;

        default:
          return <Splashscreen onClickVar={changeView} />;
      }
    };
    const changeView = view => {
      this.setState({ view });
    };

    return (
      <ApolloProvider client={client}>
        {loadView(this.state.view)}
      </ApolloProvider>
    );
  }
}
