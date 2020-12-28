import React from 'react';
import {styles} from '../StartScreen/styles';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

const SuccessScreen = (props) => {

  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Congratulations</Text>
      </View>
      <View style={styles.instruction}>
        <Text style={styles.instructiontext}>
          You have completed The Level .
        </Text>
      </View>
      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/success.json')}
          autoPlay
          loop
          style={styles.animation2}
        />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Quiz')}>
          <Text style={styles.txt}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.txt}>GO Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;
