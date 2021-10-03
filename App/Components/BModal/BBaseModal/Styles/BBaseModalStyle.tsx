/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 00:50:29
 * @modify date 2021-10-04 00:50:29
 * @desc [description]
 */

import {StyleSheet} from 'react-native';

// Themes
import {Colors, Metrics} from '../../../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  modal: {
    margin: 0,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  indicatorImage: {
    alignSelf: 'center',
    margin: Metrics.baseMargin + 2,
  },
});
