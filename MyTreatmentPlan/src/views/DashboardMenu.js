import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { styles } from '../styles';
import { Header } from 'react-native-elements';
import { TopMenuBar } from '../components/TopBarMenu';
import TreatmentPlanFooter from '../components/TreatmentPlanFooter';
import { DashboardWrapper } from '../components/DashboardWrapper';

export default class DashboardMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPlan: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{
            text: 'Your Treatment Plans',
            style: { color: '#fff' },
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          rightComponent={<TopMenuBar onClickAction={this.props.menuClick} />}
        />
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={{ width: '100%', height: '100%', flex: 1 }}
        >
          <ScrollView style={[styles.scrollView, styles.overlay]}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              {this.props.tpArray.map(treatmentPlan => {
                return (
                  <TouchableOpacity
                    style={[styles.card, styles.treatmentPlan]}
                    key={treatmentPlan.id}
                    onPress={() => {
                      this.props.setTreatmentPlan(treatmentPlan.id);
                    }}
                  >
                    <DashboardWrapper
                      parentStyle={styles.treatmentPlan}
                      onClickVar={this.props.onClickVar}
                      gradientBorder={['#FFF', '#EEE']}
                      gradient={['#333', '#333']}
                      title={treatmentPlan.name}
                      summary=""
                    >
                      <TreatmentPlanFooter
                        footerType="exercises"
                        doneExercises={this.props.doneExercises}
                      />
                    </DashboardWrapper>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
