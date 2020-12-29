import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const StartScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Wint</Text>
        <Text style={styles.subheaderText}>Let's Learn Interesting Things About Winter</Text>
      </View>
      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/startpage.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txt}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;
