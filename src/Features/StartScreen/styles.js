import {ScaledSheet} from 'react-native-size-matters';
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;


export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#2c7da0',
  },
  header: {
    alignItems: 'center',
    marginTop: '50@ms',
  },
  headerText: {
    color: 'white',
    fontSize: '60@ms',
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  subheaderText: {
    fontSize: '16@ms',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: '70@ms',
  },
  animation: {
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-90@ms'
  },
  animation2: {
    height: '400@ms',
    width: '400@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation3: {
    height: '250@ms',
    width: '250@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  instruction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '15@ms',
    color: 'white',
  },
  instructionTextTitle: {
    margin: '8@ms',
    color: 'white',
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  buttonBox: {flex: 1, justifyContent: 'center'},
  button: {
    margin: '5@ms',
    backgroundColor: '#61a5c2',
    elevation: 4,
    height: '40@ms',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '50@ms',
  },
  txt: {
    fontSize: '16@ms',
    color: '#fff'
  },
});
