/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-05 02:05:58
 * @modify date 2021-10-05 02:05:58
 * @desc [description]
 */

import React from 'react';
import {Image, StyleProp, ImageStyle} from 'react-native';
import FastImage from 'react-native-fast-image';

// Functions
import {isUrl} from '../../../Functions/AppFunctions';

// Api
import ApiConfig from '../../../Configs/ApiConfig';

export interface Props {
  source: any;
  styles: StyleProp<ImageStyle> | any;
  resizeMode?: any;
  isNeedPath?: boolean;
}

const BImage: React.FC<Props> = ({source, styles, resizeMode, isNeedPath}) => {
  return typeof source === 'string' && isUrl(source) ? (
    <FastImage
      source={{uri: isNeedPath ? ApiConfig.imagePath + source : source}}
      style={styles}
      resizeMode={resizeMode ? resizeMode : 'contain'}
    />
  ) : (
    <Image
      source={
        typeof source === 'string'
          ? {uri: isNeedPath ? ApiConfig.imagePath + source : source}
          : source
      }
      resizeMode={resizeMode ? resizeMode : 'contain'}
      style={styles}
    />
  );
};

export default BImage;
