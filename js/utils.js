import React from 'react';
import { Platform, Text } from 'react-native';

export const getColor = (data, id, key) => {
  const country = data.find(item => item[key] === id);
  if (country) {
    return country.color;
  }
  return 'white';
};

export const Images = {
  1: require('../assets/images/1.png'),
  2: require('../assets/images/2.png'),
  3: require('../assets/images/3.png'),
  4: require('../assets/images/4.jpg'),
  5: require('../assets/images/5.jpeg'),
  6: require('../assets/images/6.png'),
  7: require('../assets/images/7.png'),
  8: require('../assets/images/8.png'),
};

export function setDefaultFont() {
  const oldRender = Text.render;
  Text.render = function render(...args) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [
        Platform.OS === 'ios' ? {} : { fontFamily: 'Roboto' },
        origin.props.style,
      ],
    });
  };
}
