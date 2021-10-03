/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-03 00:43:01
 * @modify date 2021-10-03 00:43:01
 * @desc [description]
 */
import React from 'react';
import {View} from 'react-native';

// Styles
import styles from './Styles/HomeScreenStyle';

// Components
import {BBaseView, BText} from '../../Components';

function HomeScreen() {
  return (
    <BBaseView>
      <View style={styles.containerStyle}>
        <BText text="Welcome Home!!!!!!!!" size={16} isBold />
      </View>
    </BBaseView>
  );
}

export default HomeScreen;
