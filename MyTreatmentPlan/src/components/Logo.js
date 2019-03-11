import React from 'react';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import { styles } from '../styles/buttons';

export const Logo = props => {
  return (
    <View style={styles.logoWrapper}>
      <View style={[styles.logoInnerWrapper]}>
        <Icon type="material" size={32} />
      </View>
      <View style={[styles.logoInnerWrapper]}>
        <Icon type="material" size={32} />
      </View>
      <View style={[styles.logoInnerWrapper, { backgroundColor: '#3FA4EE' }]}>
        <Icon name="star" color="#fff" type="material" size={22} />
      </View>
    </View>
  );
};
