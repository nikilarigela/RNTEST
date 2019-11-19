import React from 'react';
import { Platform, Text, View } from 'react-native';

const PlatformScreen = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
      {Platform.OS.toUpperCase()}
    </Text>
  </View>
);

export default PlatformScreen;
