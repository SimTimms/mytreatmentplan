import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';
import { bodyParts } from '../data/bodyParts';
import { Header } from 'react-native-elements';
import { BodyPartWrapper } from '../components/BodyPartWrapper';
import { SingleIconButton } from '../components/Buttons';

export default class BodyPart extends React.Component {
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
                this.props.changeView('splashScreen');
              }}
            >
              <SingleIconButton title="BACK" icon="chevron-left" />
            </TouchableOpacity>
          }
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<Text>LOGO</Text>}
        />

        <ScrollView style={styles.scrollView}>
          <Text
            style={{
              backgroundColor: '#EDEDED',
              borderRadius: 5,
              paddingTop: 15,
              paddingBottom: 15,
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 10,
              width: '90%',
            }}
          >
            What is affected?
          </Text>
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
              let gradient = ['#4a4a4a', '#4a4a4a'];
              let gradientBorder = ['#4a4a4a', '#4a4a4a'];

              return (
                <TouchableOpacity
                  style={[styles.card, styles.bodyPartCard]}
                  key={bodyPart.id}
                  bodyId={bodyPart.id}
                  onPress={() => {
                    this.props.onClickVar(bodyPart.id, 'diagnosis');
                  }}
                >
                  <BodyPartWrapper
                    parentStyle={styles.bodyPartCard}
                    onClickVar={this.props.onClickVar}
                    objectIn={bodyPart}
                    gradientBorder={gradientBorder}
                    gradient={gradient}
                    title=""
                    summary=""
                  >
                    <Text
                      style={{ color: '#FFF', marginBottom: 26, fontSize: 16 }}
                    >
                      {bodyPart.name}
                    </Text>
                  </BodyPartWrapper>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
