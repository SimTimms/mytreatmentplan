import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  treatmentPlan: { width: '100%', height: 94 },
  exerciseCard: { width: '90%', height: 80 },
  statCard: { width: '90%', height: 120, margin: 10 },
  bodyPartCard: { height: 106 },
  diagnosisCard: {
    height: 70,
  },
  menuCard: { height: 120 },
  overlay: {
    backgroundColor: '#0A1828',
    height: '100%',
    width: '100%',
    opacity: 0.9,
    padding: 0,
  },
  card: {
    width: 130,
    height: 140,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    margin: 10,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
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
  cardImage: {
    width: 100,
  },
  cardText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    flexGrow: 1,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    height: 32,
    marginTop: 10,
  },
  exerciseText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'left',
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  exerciseTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'left',
    height: 16,
    marginTop: 10,
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
