import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  smallMargin: 4,
  baseMargin: 8,
  halfTripleBaseMargin: 12,
  doubleBaseMargin: 16,
  halfQuintupleBaseMargin: 20,
  tripleBaseMargin: 24,
  quadrupleBaseMargin: 32,
  quintupleBaseMargin: 40,
  tabBarHeight: 60,
  borderRadiusSmall: 8,
};

export default Metrics;
