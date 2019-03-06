import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonWrapper: {
    width: 120,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    borderRadius: 10,
  },
  buttonRight: {
    alignSelf: 'flex-end',
  },
  buttonInnerWrapper: {
    width: 44,
    height: 44,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#3FA4EE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: -50,
  },
  buttonTitle: {
    color: '#3FA4EE',
    fontSize: 20,
  },
  buttonContent: {
    color: '#3FA4EE',
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    zIndex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSecondaryContent: {
    color: '#FFF',
    width: 50,
    textAlign: 'center',
    zIndex: 1,
    fontSize: 10,
  },
  buttonPrimaryContent: {
    color: '#FFF',
    width: '100%',
    textAlign: 'center',
    zIndex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
