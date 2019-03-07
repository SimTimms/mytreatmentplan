import React from 'react';
import { Query } from 'react-apollo';
import { styles } from '../styles';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { GET_DIAGNOSIS } from '../api/queries';
import { DiagnosisWrapper } from '../components/DiagnosisWrapper';
import { SingleIconButton } from '../components/Buttons';
import InfoText from '../components/InfoText';
import PageWrapper from '../components/PageWrapper';

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
                this.props.changeView('affectedArea');
              }}
            >
              <SingleIconButton title="BACK" icon="chevron-left" />
            </TouchableOpacity>
          }
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<Text>LOGO</Text>}
        />
        <ScrollView style={styles.scrollView}>
          <InfoText text="Do you have a diagnosis?" />
          <Query query={GET_DIAGNOSIS} variables={{ id: this.props.id }}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading....</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

              return (
                <PageWrapper>
                  <TouchableOpacity
                    style={[styles.card, styles.diagnosisCard]}
                    key="no_id"
                    onPress={() => {
                      this.props.setDiagnosis(
                        'no_id',
                        'diagnosis',
                        'No Diagnosis',
                      );
                    }}
                  >
                    <DiagnosisWrapper
                      parentStyle={styles.diagnosisCard}
                      gradientBorder={['#4a4a4a', '#4a4a4a']}
                      gradient={['#4a4a4a', '#4a4a4a']}
                      title=""
                      summary=""
                    >
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 14,
                          width: '100%',
                          textAlign: 'center',
                        }}
                      >
                        No Diagnosis
                      </Text>
                    </DiagnosisWrapper>
                  </TouchableOpacity>

                  {data.publicBodyPart.options.map((diagnosis, index) => {
                    let gradient = ['#4a4a4a', '#4a4a4a'];
                    let gradientBorder = ['#4a4a4a', '#4a4a4a'];
                    return (
                      <TouchableOpacity
                        style={[styles.card, styles.diagnosisCard]}
                        key={diagnosis.id}
                        onPress={() => {
                          this.props.setDiagnosis(
                            diagnosis.id,
                            'diagnosis',
                            diagnosis.name,
                          );
                        }}
                      >
                        <DiagnosisWrapper
                          parentStyle={styles.diagnosisCard}
                          objectIn={diagnosis}
                          gradientBorder={gradientBorder}
                          gradient={gradient}
                          title=""
                          summary=""
                        >
                          <Text
                            style={{
                              color: '#FFF',

                              fontSize: 14,
                              width: '100%',
                              textAlign: 'center',
                            }}
                          >
                            {diagnosis.name}
                          </Text>
                        </DiagnosisWrapper>
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
