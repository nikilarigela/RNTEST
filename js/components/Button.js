import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>label</Text>
  </TouchableOpacity>
);

export default Button;
