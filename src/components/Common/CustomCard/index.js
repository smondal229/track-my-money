import React from 'react';
import { Card } from 'react-native-elements';
import cardProps from './styles';

const CustomCard = props => {
  console.log(props);
  return <Card containerStyle={cardProps.root} {...props} />
};

export default CustomCard;
