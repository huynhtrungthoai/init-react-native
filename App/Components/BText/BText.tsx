/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-03 00:29:57
 * @modify date 2021-10-03 00:29:57
 * @desc [description]
 */
import React from 'react';
import {Text, TextStyle, Platform, StyleProp} from 'react-native';

// Styles
import styles from './Styles/BTextStyle';

export interface Props {
  text: String | undefined | null;
  color?: string;
  size?: number;
  align?: any;
  isBold?: boolean;
  numberOfLines?: number;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
}

const KText: React.FC<Props> = props => {
  var textStyle = [styles.defaultText, props.style];
  if (props.color) {
    textStyle.push({color: props.color});
  }
  if (props.size) {
    textStyle.push({fontSize: props.size});
  }
  if (props.lineHeight) {
    textStyle.push({lineHeight: props.lineHeight});
  }
  if (props.isBold) {
    textStyle.push({
      fontWeight: Platform.OS === 'android' ? 'bold' : '700',
    });
  }
  if (props.align) {
    textStyle.push({alignSelf: props.align});
  }
  return (
    <Text
      style={[styles.defaultText, textStyle]}
      numberOfLines={props.numberOfLines && props.numberOfLines}>
      {props.text ?? ''}
    </Text>
  );
};

export default KText;
