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
import DashboardFooter from '../components/DashboardFooter';
import { DashboardWrapper } from '../components/DashboardWrapper';

export default class Dashboard extends React.Component {
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
            text: 'EARLY KNEE OA',
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
              <TouchableOpacity
                style={[styles.card, styles.statCard]}
                key="exerciseResults"
                onPress={() => this.props.onClickVar('exercises')}
              >
                <DashboardWrapper
                  parentStyle={styles.statCard}
                  gradientBorder={['#F7DE85', '#C75413']}
                  gradient={['#333', '#333']}
                  title="Exercise"
                  summary="Your Results"
                >
                  <DashboardFooter
                    gradientColor={['#F7DE85', '#C75413']}
                    footerType="exercises"
                  />
                </DashboardWrapper>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.card, styles.bodyPartCard]}
                key="understandingResults"
              >
                <DashboardWrapper
                  parentStyle={styles.bodyPartCard}
                  onClickVar={this.props.onClickVar}
                  gradientBorder={['#6BE7FF', '#8DBBFF']}
                  gradient={['#333', '#333']}
                  title="Understanding"
                  summary=""
                >
                  <DashboardFooter
                    gradientColor={['#6BE7FF', '#8DBBFF']}
                    footerType="understanding"
                  />
                </DashboardWrapper>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.card, styles.bodyPartCard]}
                key="localServices"
              >
                <DashboardWrapper
                  parentStyle={styles.bodyPartCard}
                  onClickVar={this.props.onClickVar}
                  gradientBorder={['#B4EC51', '#429321']}
                  gradient={['#333', '#333']}
                  title="Local Services"
                  summary=""
                >
                  <DashboardFooter
                    gradientColor={['#B4EC51', '#429321']}
                    footerType="localServices"
                  />
                </DashboardWrapper>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
