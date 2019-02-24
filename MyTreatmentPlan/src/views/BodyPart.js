import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import { styles } from '../styles';
import { bodyParts } from '../data/bodyParts';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { CardWrapper } from '../components/CardWrapper';

export default class BodyPart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'Where is the problem ?',
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<TopMenuBar onClickAction={this.props.menuClick} />}
        />
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={{ width: '100%', height: '100%', flex: 1 }}
        >
          <ScrollView style={[styles.scrollView, styles.overlay]}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              {bodyParts.map((bodyPart, index) => {
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
                    style={[styles.card, styles.bodyPartCard]}
                    key={bodyPart.id}
                    bodyId={bodyPart.id}
                    onPress={() => {
                      this.props.onClickVar(bodyPart.id, 'diagnosis');
                    }}
                  >
                    <CardWrapper
                      parentStyle={styles.bodyPartCard}
                      onClickVar={this.props.onClickVar}
                      objectIn={bodyPart}
                      gradientBorder={gradientBorder}
                      gradient={gradient}
                      title=""
                      summary=""
                    >
                      <Text style={{ color: '#FFF', marginBottom: 20 }}>
                        {bodyPart.name}
                      </Text>
                    </CardWrapper>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
