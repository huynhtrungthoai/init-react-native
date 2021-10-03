/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 01:22:26
 * @modify date 2021-10-04 01:22:26
 * @desc [description]
 */

import React from 'react';
import {ActivityIndicator, View} from 'react-native';

// Styles
import styles from './Styles/BCenterLoadingStyle';

export interface Props {}

const BCenterLoading: React.FC<Props> = () => {
  return (
    <View style={styles.indicatorContainer}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={18} color={'green'} />
      </View>
    </View>
  );
};

export default BCenterLoading;
