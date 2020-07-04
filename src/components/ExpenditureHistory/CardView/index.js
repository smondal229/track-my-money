import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const CardView = ({ item: { type, date, price } }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[ '#32b3ad', '#1a5a99' ]}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <Text h4>{type}</Text>
        <Text>{date}</Text>
      </View>
      <Text h3>{price}</Text>
    </LinearGradient>
  );
};

export default CardView;
