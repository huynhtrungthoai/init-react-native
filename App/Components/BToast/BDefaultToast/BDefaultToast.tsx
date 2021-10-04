/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-05 02:14:15
 * @modify date 2021-10-05 02:14:15
 * @desc [description]
 */

import React, {LegacyRef} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

// Styles
import styles from './Styles/BDefaultToastStyle';

export interface Props {
  customRef: any;
  position?: number;
  style?: StyleProp<ViewStyle>;
}

const BDefaultToast: React.FC<Props> = props => {
  return (
    <View style={styles.rootContainer}>
      <Toast
        opacity={1}
        position="center"
        ref={props.customRef}
        fadeInDuration={700}
        fadeOutDuration={1000}
        style={styles.container}
        textStyle={styles.text}
        positionValue={props.position ? props.position : 130}
      />
    </View>
  );
};

export default BDefaultToast;
