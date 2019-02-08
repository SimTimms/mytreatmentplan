import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from '../styles';

const ImageSquare = props => {
  console.log(props);
  if (props.bgImage) {
    switch (props.bgImage) {
      case 'chorizo.jpg':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/chorizo.jpg')}
          />
        );
      case 'xray.jpg':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/mri.jpg')}
          />
        );
      case 'running.jpg':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/running.jpg')}
          />
        );

      case 'physio.jpg':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/physio.jpg')}
          />
        );
      default:
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/acu.jpeg')}
          />
        );
    }
  } else {
    return <View style={[styles.menuItemBox, props.bgColor]} />;
  }
};

export const MenuItem = props => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => {
        props.onClickVar(props.id, props.keyName);
      }}
      key={props.keyName}
    >
      <ImageSquare bgColor={props.bgColor} bgImage={props.bgImage} />
      <View>
        <Text style={[styles.buttonText, styles.bold]}>{props.name}</Text>
        <Text style={[styles.buttonText, styles.summary]}>
          Add a summary here
        </Text>
      </View>
    </TouchableOpacity>
  );
};
