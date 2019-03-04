import React from 'react';
import { View } from 'react-native';
import { SingleIconStat } from './SingleStat';
import { styles } from '../styles/stats';

export const ExerciseFooter = props => {
  {
    switch (props.footerType) {
      case 'exercise':
        const icon = props.checked ? 'star' : 'play-arrow';
        return (
          <SingleIconStat
            content=""
            title=""
            icon={icon}
            addCSS={styles.statRight}
          />
        );

      default:
        return <View />;
    }
  }
};
