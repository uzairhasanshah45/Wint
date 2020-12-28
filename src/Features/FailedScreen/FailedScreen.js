import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../StartScreen/styles';

const FailedScreen = (props) => {
  
  return (
    <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Sorry</Text>
      </View>
      <View style={styles.instruction}>
        <Text style={styles.instructiontext}>You Failed The Level.</Text>
      </View>
      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/failed.json')}
          autoPlay
          loop
          style={styles.animation3}
        />
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Quiz')}>
          <Text style={styles.txt}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FailedScreen;
