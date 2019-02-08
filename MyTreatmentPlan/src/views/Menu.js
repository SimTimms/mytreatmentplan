import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import { MenuItem } from '../components/MenuItem';
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
            name="Options Discussed"
            keyName="options"
            id={this.props.id}
            onClickVar={this.props.onClickVar}
            bgColor={styles.bgBlue}
            bgImage="chorizo.jpg"
          />
          <MenuItem
            name="Investigations"
            keyName="investigations"
            id={this.props.id}
            onClickVar={this.props.onClickVar}
            bgColor={styles.bgRed}
            bgImage="xray.jpg"
          />
          <MenuItem
            name="Treatments"
            keyName="treatments"
            id={this.props.id}
            onClickVar={this.props.onClickVar}
            bgColor={styles.bgGreen}
            bgImage="acu.jpg"
          />
          <MenuItem
            name="Referred Services"
            keyName="referred"
            id={this.props.id}
            onClickVar={this.props.onClickVar}
            bgColor={styles.bgOrange}
            bgImage="physio.jpg"
          />
          <MenuItem
            name="Exercises"
            keyName="exercises"
            id={this.props.id}
            onClickVar={this.props.onClickVar}
            bgColor={styles.bgPink}
            bgImage="running.jpg"
          />
        </ScrollView>
      </View>
    );
  }
}
