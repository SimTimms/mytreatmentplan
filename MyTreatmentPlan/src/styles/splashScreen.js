import { StyleSheet } from 'react-native';

export const SplashscreenStyles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    paddingBottom: 10,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#4a4a4a',
    fontWeight: '300',
    fontSize: 26,
    width: '100%',
    paddingTop: 10,
    marginBottom: 50,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 30,
    width: 176,
    margin: 12,
  },
  device: {
    height: 24,
    width: 28,
    marginTop: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#72b6fd',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
});
