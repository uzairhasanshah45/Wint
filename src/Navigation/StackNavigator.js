import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HibernatingAnimals from '../Features/HibernatingAnimals/HibernatingAnimals';
import Quiz from '../Features/Quiz/Quiz';
import StartScreen from '../Features/StartScreen/StartScreen';
import Home from '../Features/Home/Home';
import FailedScreen from '../Features/FailedScreen/FailedScreen';
import SuccessScreen from '../Features/SuccessScreen/SuccessScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="HibernatingAnimals"
          component={HibernatingAnimals}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="FailedScreen"
          component={FailedScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
