/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-09-01 18:59:53
 * @modify date 2021-09-01 18:59:53
 * @desc [description]
 */

import React from 'react';
import {
  Platform,
  StyleProp,
  ViewStyle,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

// Styles
import styles from './Styles/BBaseViewStyle';

export interface Props {
  containerRoot?: StyleProp<ViewStyle>;
  onLayout?: any;
}
const BBaseView: React.FC<Props> = props => {
  return (
    <KeyboardAvoidingView
      style={styles.containerRoot}
      behavior="padding"
      enabled
      keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0}>
      <SafeAreaView style={[styles.containerRoot, props.containerRoot]}>
        {props.children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default BBaseView;
