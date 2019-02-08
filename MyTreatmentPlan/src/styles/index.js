import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 32,
    width: 180,
  },
  button: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    textAlign: 'center',
    margin: 5,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
  },
  buttonText: {
    color: '#444',
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 10,
  },
  bold: {
    fontWeight: '500',
  },
  summary: {
    color: '#aaa',
  },
  bgBlue: {
    backgroundColor: '#72b6fd',
  },
  bgOrange: {
    backgroundColor: '#fdd071',
  },
  bgRed: {
    backgroundColor: '#fd7a71',
  },
  bgPink: {
    backgroundColor: '#fd71b9',
  },
  bgGreen: {
    backgroundColor: '#91fd71',
  },
  whiteText: {
    color: 'white',
  },
  menuItemBox: {
    width: 60,
    height: 60,
  },
});
