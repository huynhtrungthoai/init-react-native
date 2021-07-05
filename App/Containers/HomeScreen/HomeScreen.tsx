import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import isEmpty from 'lodash/isEmpty';

// Styles
import styles from './Styles/HomeScreenStyle';

// Redux
import {useDispatch, useSelector} from 'react-redux';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text text={'Hello word'} style={{fontSize: 30}} />
    </View>
  );
}

export default HomeScreen;
