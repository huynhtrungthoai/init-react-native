import React from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

// Screens
import RootContainer from './RootContainer';

// Redux
import {Provider} from 'react-redux';
import store from '../Redux/CreateStore';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const App: () => any = () => {
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MyStatusBar backgroundColor={'white'} barStyle="dark-content" />
        <RootContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default App;
