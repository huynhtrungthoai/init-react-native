/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 01:22:00
 * @modify date 2021-10-04 01:22:00
 * @desc [description]
 */

import {StyleSheet} from 'react-native';

// themes
import {Metrics, Colors} from '../../../../Themes';

export default StyleSheet.create({
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.screenHeight,
  },
  loadingContainer: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
});
