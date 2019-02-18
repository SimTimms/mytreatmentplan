import React from 'react';
import { Query } from 'react-apollo';
import { styles } from '../styles';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { GET_DIAGNOSIS } from '../api/queries';
import { CardFooter } from '../components/CardFooter';
import { CardWrapper } from '../components/CardWrapper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'What is your diagnosis?',
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
          <Query query={GET_DIAGNOSIS} variables={{ id: this.props.id }}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading....</Text>;
              if (error) {
                return <Text>{error.toString()}</Text>;
              }

              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  {data.publicBodyPart.options.map((diagnosis, index) => {
                    //TODO: BAD BAD BAD, fix this later with an alogrthm
                    const colorArray = [
                      ['#FAD961', '#F76B1C'],
                      ['#6BE7FF', '#8DBBFF'],
                      ['#B4EC51', '#429321'],
                      ['#C86DD7', '#3023AE'],
                      ['#F5515F', '#9F041B'],
                      ['#FAD961', '#F76B1C'],
                      ['#6BE7FF', '#8DBBFF'],
                      ['#B4EC51', '#429321'],
                      ['#C86DD7', '#3023AE'],
                      ['#F5515F', '#9F041B'],
                      ['#FAD961', '#F76B1C'],
                      ['#6BE7FF', '#8DBBFF'],
                      ['#B4EC51', '#429321'],
                      ['#C86DD7', '#3023AE'],
                    ];
                    const borderArray = [
                      ['#F7DE85', '#C75413'],
                      ['#A6F1FF', '#5185D0'],
                      ['#CCEF8D', '#326D1A'],
                      ['#C86DD7', '#241987'],
                      ['#F5838C', '#700313'],
                      ['#F7DE85', '#C75413'],
                      ['#A6F1FF', '#5185D0'],
                      ['#CCEF8D', '#326D1A'],
                      ['#C86DD7', '#241987'],
                      ['#F5838C', '#700313'],
                      ['#F7DE85', '#C75413'],
                      ['#A6F1FF', '#5185D0'],
                      ['#CCEF8D', '#326D1A'],
                      ['#C86DD7', '#241987'],
                      ['#F5838C', '#700313'],
                    ];

                    let gradient = colorArray[index];
                    let gradientBorder = borderArray[index];

                    return (
                      <TouchableOpacity
                        style={[styles.card, styles.diagnosisCard]}
                        key={diagnosis.id}
                        onPress={() => {
                          this.props.onClickVar(diagnosis.id, 'diagnosis');
                        }}
                      >
                        <CardWrapper
                          parentStyle={styles.diagnosisCard}
                          onClickVar={this.props.onClickVar}
                          objectIn={diagnosis}
                          gradientBorder={gradientBorder}
                          gradient={gradient}
                          title={diagnosis.name}
                          summary="Test summary here"
                        >
                          <CardFooter gradientColor={gradient} />
                        </CardWrapper>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}
