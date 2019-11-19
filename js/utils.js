export const getColor = (data, id, key) => {
  const country = data.find(item => item[key] === id);
  if (country) {
    return country.color;
  }
  return 'white';
};

export const Images = {
  1: require('../images/1.png'),
  2: require('../images/2.png'),
  3: require('../images/3.png'),
  4: require('../images/4.jpg'),
  5: require('../images/5.jpeg'),
  6: require('../images/6.png'),
  7: require('../images/7.png'),
  8: require('../images/8.png'),
};
