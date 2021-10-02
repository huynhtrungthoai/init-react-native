import React, {useEffect} from 'react';
import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
      clearTimeout(timeOut);
    }, 700);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ActivityIndicator color={'black'} />
    </SafeAreaView>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});