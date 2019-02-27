import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  statWrapper: {
    width: 60,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statInnerWrapper: {
    width: 54,
    height: 54,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#3FA4EE',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statTitle: {
    color: '#ddd',
    marginBottom: 4,
    fontSize: 10,
  },
  statContent: {
    color: '#3FA4EE',
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    zIndex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  statSecondaryContent: {
    color: '#FFF',
    width: 50,
    textAlign: 'center',
    zIndex: 1,
    fontSize: 10,
  },
  statPrimaryContent: {
    color: '#FFF',
    width: '100%',
    textAlign: 'center',
    zIndex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
