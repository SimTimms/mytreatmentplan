import React from 'react';
import { DashboardCardWrapper } from '../components/DashboardCardWrapper';
import { TouchableOpacity } from 'react-native';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.importStyle}
        key={this.props.importKey}
        onPress={this.props.pressAction}
      >
        <DashboardCardWrapper
          parentStyle={this.props.parentStyle}
          bgColor={this.props.bgColor}
          borderColor={this.props.borderColor}
          bgImage={this.props.bgImage}
          text={this.props.text}
        />
      </TouchableOpacity>
    );
  }
}
