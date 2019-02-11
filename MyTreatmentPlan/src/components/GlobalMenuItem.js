import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from '../styles';

const ImageSquare = props => {
  if (props.bgImage) {
    switch (props.bgImage) {
      case 'Head':
      case 'Neck':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/head.jpg')}
          />
        );
      case 'Shoulder':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/shoulder.jpg')}
          />
        );
      case 'Hand':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/hand.jpg')}
          />
        );
      case 'Knee':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/knee.jpg')}
          />
        );
      case 'Elbow':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/elbow.jpg')}
          />
        );

      case 'Wrist':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/wrist.jpg')}
          />
        );

      case 'Spine':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/spine.jpg')}
          />
        );
      case 'Hip':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/hip.jpg')}
          />
        );

      case 'Foot':
        return (
          <Image
            style={styles.menuItemBox}
            source={require('../assets/foot.jpg')}
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

export const GlobalMenuItem = props => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => {
        props.onClickVar(props.id);
      }}
      key={props.keyName}
    >
      <ImageSquare bgColor={props.bgColor} bgImage={props.bgImage} />
      <View>
        <Text style={[styles.buttonText, styles.bold]}>{props.name}</Text>
        <Text style={[styles.buttonText, styles.summary]}>{props.summary}</Text>
      </View>
    </TouchableOpacity>
  );
};
