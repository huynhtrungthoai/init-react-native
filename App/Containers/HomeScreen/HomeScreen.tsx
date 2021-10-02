/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-03 00:43:01
 * @modify date 2021-10-03 00:43:01
 * @desc [description]
 */
import React from 'react';
import {View, Text} from 'react-native';

// Styles
import styles from './Styles/HomeScreenStyle';
import {BBaseView, BText} from '../../Components';

// import {Colors} from '../../Themes';

function HomeScreen({navigation}) {
  return (
    <BBaseView>
      <BText text="Welcome Home!!!!!!!!" />
    </BBaseView>
  );
}

export default HomeScreen;
