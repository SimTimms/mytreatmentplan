import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { bodyParts } from '../data/bodyParts';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { GlobalMenuItem } from '../components/GlobalMenuItem';

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
          containerStyle={{ backgroundColor: '#72b6fd' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
          {bodyParts.map(bodyPart => {
            console.log(bodyPart);
            return (
              <GlobalMenuItem
                name={bodyPart.name}
                key={bodyPart.name}
                id={this.props.id}
                onClickVar={this.props.onClickVar}
                onClickDestination="diagnosis"
                bgImage={bodyPart.name}
                summary={bodyPart.summary}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
