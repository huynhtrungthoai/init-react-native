/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 01:11:42
 * @modify date 2021-10-04 01:11:42
 * @desc [description]
 */

import React from 'react';
import {ActivityIndicator, StyleProp, View, ViewStyle} from 'react-native';

// Styles
import styles from './Styles/BLoadingStyle';

export interface Props {
  containerStyle?: StyleProp<ViewStyle>;
}

const BLoading: React.FC<Props> = props => {
  return (
    <View style={[styles.loadingContainer, props.containerStyle]}>
      <ActivityIndicator size="small" color={'green'} />
    </View>
  );
};

export default BLoading;
