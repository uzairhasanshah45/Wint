import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;


export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#2c7da0',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  homeHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#014f86',
    height: '40@ms',
    borderColor: '#014f86',
  },
  headrtxt: {
    color: 'white',
  },
  txt: {
    color: 'white'
  },
  homeMainView: {
    alignItems: "center",
    justifyContent: "center"
  },
  mainHeading: {
    color: 'white',
    fontSize: '60@ms',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mainPara: {
    fontSize: '16@ms',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: '20@ms',
  },
  buttonView: {
    height: '40@ms',
    width: '60%',
    marginTop: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50@ms',
    backgroundColor: '#61a5c2',
    elevation: 5,
  },
  buttonText: {
    fontSize: '16@ms',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  animationBox: {
    // marginVertical: '10@ms',
    // justifyContent: 'center',
    alignItems: 'center',
    // flex: 3,
  },
  animation: {
    height: '300@ms',
    width: '500@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
