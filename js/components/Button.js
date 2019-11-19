import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ label, onPress }) => (
  <View
    style={{
      backgroundColor: '#E53935',
      borderRadius: 10,
      width: '40%',
      marginVertical: 8,
    }}>
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          padding: 16,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: 2,
          fontSize: 16,
        }}>
        {label.toUpperCase()}
      </Text>
    </TouchableOpacity>
  </View>
);

export default Button;
