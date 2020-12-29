import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c7da0',
  },
  animalHeader: {
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5@ms',
    marginBottom: '20@ms',
  },
  headerText: {
    fontSize: '20@ms',
    textAlign: 'center',
    color: 'white',
  },
  subheaderText: {
    color: 'white',
  },
  animalImageContainer: {
    borderColor: '#61a5c2', 
    borderWidth: 1, 
    backgroundColor: '#61a5c2', 
    marginTop: '3@ms', 
    borderRadius: '10@ms',
    marginTop: '5@ms',
    padding: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '30@ms',
    marginTop: '10@ms',
    elevation: 5,
  },
  imageContainer: {
    borderRadius: '20@ms',
    marginTop: '5@ms',
    padding: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#61a5c2',
    marginHorizontal: '30@ms',
  },
  animalImage: {
    height: '150@ms',
    width: '150@ms',
    resizeMode: 'contain',
  },
  imgtxt: {
    backgroundColor: 'black', 
    opacity: 0.6, 
    color: 'white',
    width: '295@ms',
    height: '30@ms',
    borderBottomLeftRadius: '9@ms',
    borderBottomRightRadius: '9@ms',
    position: 'absolute',
    bottom: -1,
    marginLeft: '15@ms',
    fontSize: '15@ms',
    fontWeight: 'bold',
    paddingLeft: '20@ms',
    paddingTop: '5@ms'
  },
  image: {
    height: '200@ms',
    width: '200@ms',
    resizeMode: 'contain',
  },
  scoreContainer: {
    marginTop: '10@ms',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  individualScore: {
    height: '40@ms',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1@ms',
    borderColor: 'white',
    backgroundColor: '#f4845f',
    borderRadius: '5@ms',
  },
  scoreText: {
    fontSize: '18@ms',
    textAlign: 'center',
    color: 'white',
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8@ms',
    marginHorizontal: '25@ms',
    flexDirection: 'row',
  },
  questionText: {
    fontSize: '16@ms',
    color: 'white',
  },
  gifImg: {
    height: '35@ms',
    width: '35@ms'
  },
  problemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15@ms',
  },
  optionsBox: {
    marginHorizontal: '25@ms',
    marginVertical: '3@ms',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5@ms'
  },
  individualOptions: {
    height: '45@ms',
    justifyContent: 'center',
    width: '90%',
    borderRadius: '30@ms',
    borderWidth: '1@ms',
    borderColor: '#f79d65',
    backgroundColor: '#f79d65',
    elevation: 2,
  },
  options: {
    fontSize: '15@ms',
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    marginTop: '25@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    justifyContent: 'center',
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: '20@ms',
    width: '20@ms',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontIcon: {
    fontSize: '25@ms',
    paddingHorizontal: '4@ms',
    color: '#e63946',
  },
  iconText: {
    fontSize: '22@ms',
    color: 'white',
  },
  container1: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    width: null,
    height: null,
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    width: '300@ms',
    height: '550@ms',
    borderRadius: 20,
    padding: '30@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  modalHeading: {
    color: 'black', 
    borderBottomWidth: 1, 
    borderBottomColor: 'grey', 
    width: '230@ms', 
    textAlign: "center", 
    paddingBottom: '15@ms'
  },
  dsc: {
    marginTop: '40@ms'
  },
  dscTxt: {
    fontSize: '16@ms',
    textAlign: 'center',
    padding: '10@ms'
  },
  openButton: {
    backgroundColor: '#61a5c2',
    borderRadius: '10@ms',
    height: '30@ms',
    width: '100@ms',
    elevation: 5,
    marginTop: '20@ms'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5@ms'
  },
});

export default styles;
