import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: Dimensions.get('window').width - 100,
  },
  contentwrapper: {
    position: 'relative',
    height: 200
  },
  bottomText: {
    position: 'absolute',
    bottom: 0
  }
})

export default styles;
