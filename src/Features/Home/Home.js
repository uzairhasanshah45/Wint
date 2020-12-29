import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from "./style";
import LottieView from 'lottie-react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';


export default function Home(props) {

  const renderButtons = (name, no) => {

    return (
      <>
        <TouchableOpacity style={styles.buttonView} onPress={() => (no == 1 ? props.navigation.navigate('HibernatingAnimals') : props.navigation.navigate(name))}>
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      </>
    )
  }

  const HomeAnimation = () => {

    return(
    <View style={styles.animationBox}>
      <LottieView
        source={require('../../assets/animation/snowman.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
    )
  }


  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
      <View style={styles.homeHeader}>
        <TouchableOpacity style={{ position: 'absolute',  left: 15 }} onPress={() => props.navigation.goBack()}>
          <BackIcon name="arrow-back" size={20} color='white' />
        </TouchableOpacity>
        <Text style={styles.headrtxt}>Home</Text>
      </View>
      <View style={styles.homeMainView}>
        <Text style={styles.mainHeading}>Something Interesting</Text>
        <Text style={styles.mainPara}>Let's Play and learn some interesting things about winter where you can findout those animals who hibernate in winter and some interesting mind quiz</Text>
      </View>
     {HomeAnimation()}
      <View style={styles.container}>
        {renderButtons('Hibernating Animals', 1)}
        {renderButtons('Quiz')}
      </View>
    </View>
  )
}
