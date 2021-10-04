/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 00:58:17
 * @modify date 2021-10-04 00:58:17
 * @desc [description]
 */

import React, {useEffect} from 'react';
import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';

function SplashScreen({navigation}: any) {
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
