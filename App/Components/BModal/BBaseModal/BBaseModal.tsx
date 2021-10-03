/**
 * @author [huynhtrungthoai]
 * @email [huynhtrungthoai@gmail.com]
 * @create date 2021-10-04 00:50:33
 * @modify date 2021-10-04 00:50:33
 * @desc [description]
 */

import React from 'react';
import {StyleProp, View, ViewStyle, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';

// Styles
import styles from './Styles/BBaseModalStyle';

export interface Props {
  isVisible: boolean;
  renderContent?: any;
  containerStyle?: StyleProp<ViewStyle>;
  onSwipeComplete: () => void;
}

const BBaseModal: React.FC<Props> = (props: any) => {
  return (
    props.isModalVisible && (
      <Modal
        isVisible={props.isModalVisible}
        style={styles.modal}
        statusBarTranslucent
        propagateSwipe={true}
        backdropOpacity={0.5}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onSwipeComplete={props.onSwipeComplete}
        onBackdropPress={props.onSwipeComplete}>
        <SafeAreaView style={{backgroundColor: 'white'}}>
          <View style={[styles.container, props.modalContainerStyle]}>
            {props.renderContent}
          </View>
        </SafeAreaView>
      </Modal>
    )
  );
};

export default BBaseModal;
