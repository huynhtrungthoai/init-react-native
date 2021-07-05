import React from 'react';
import {View} from 'react-native';

import RootContainer from './RootContainer';
import {Provider} from 'react-redux';
import store from '../Redux/CreateStore';

const App: () => any = () => {
  return (
    <Provider store={store}>
      <View style={{height: 400, width: '100%', backgroundColor: 'red'}}>
        <RootContainer></RootContainer>
      </View>
    </Provider>
  );
};
export default App;
