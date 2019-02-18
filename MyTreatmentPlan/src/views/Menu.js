import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { optionsArray } from '../data/optionTypes';
import { CardFooter } from '../components/CardFooter';
import { CardWrapper } from '../components/CardWrapper';

export default class MenuArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'Menu',
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={[styles.card, styles.menuCard]}
              onPress={() => {
                this.props.onClickVar(this.props.id, 'diagnosisContent', null);
              }}
            >
              <CardWrapper
                parentStyle={styles.menuCard}
                key={this.props.id}
                gradientBorder={['#F5838C', '#700313']}
                gradient={['#F5515F', '#9F041B']}
                title="About your Diagnosis"
                summary="Test summary here"
              >
                <CardFooter gradientColor={['#F5515F', '#9F041B']} />
              </CardWrapper>
            </TouchableOpacity>
            {optionsArray.map((menuItem, index) => {
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
                  style={[styles.card, styles.menuCard]}
                  key={menuItem.keyName}
                  onPress={() => {
                    this.props.onClickVar(
                      this.props.id,
                      menuItem.keyName,
                      menuItem.typeId,
                    );
                  }}
                >
                  <CardWrapper
                    parentStyle={styles.menuCard}
                    onClickVar={this.props.onClickVar}
                    objectIn={menuItem}
                    gradientBorder={gradientBorder}
                    gradient={gradient}
                    title={menuItem.name}
                    summary="Test summary here"
                  >
                    <CardFooter
                      gradientColor={gradient}
                      footerType={menuItem.name}
                    />
                  </CardWrapper>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
