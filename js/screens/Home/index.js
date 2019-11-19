import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Home = props => {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('Players'), 2000);
  }, [props.navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
