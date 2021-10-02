import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screenTracking} from './NavigationActions';

// ref
import {navigationRef} from '../Navigation/AppNavigator';

// Screens
import SplashScreen from '../Containers/SplashScreen';
import {HomeScreen} from '../Containers/HomeScreen';

const Stack = createStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef} onStateChange={screenTracking}>
      <Stack.Navigator initialRouteName={'SplashScreen'} headerMode={'none'}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'HomeScreen'} component={HomeStacks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default AppNavigation;
