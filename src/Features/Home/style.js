import {ScaledSheet} from 'react-native-size-matters';
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
  txt:{
    color: 'white'
  }
  ,buttonView: {
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
    alignSelf: 'center',
}
});
