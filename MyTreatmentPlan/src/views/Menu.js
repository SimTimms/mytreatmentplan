import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { MenuItem } from '../components/MenuItem';
import { optionsArray } from '../data/optionTypes';

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
          containerStyle={{ backgroundColor: '#72b6fd' }}
          rightComponent={<TopMenuBar onClickAction={this.props.onClickVar} />}
        />
        <ScrollView style={styles.scrollView}>
          <MenuItem
            key="diagnosis_content"
            name="About your Diagnosis"
            keyName="diagnosisContent"
            id={this.props.id}
            onClickVar={this.props.onClickVar}
            bgImage="shoulder.jpg"
          />
          {optionsArray.map(menuItem => {
            return (
              <MenuItem
                key={menuItem.keyName}
                name={menuItem.name}
                keyName={menuItem.keyName}
                id={this.props.id}
                onClickVar={this.props.onClickVar}
                bgImage={menuItem.image}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
