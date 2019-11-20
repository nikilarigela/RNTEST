import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from '../../components';
import { getColor } from '../../utils';

const Home = props => {
  const navigateTo = screenName => {
    props.navigation.navigate(screenName);
  };
  const countries = useSelector(state => state.countriesReducer);
  const { data, selectedCountryId } = countries;
  const selectedCountry = data.find(item => item.Id === selectedCountryId);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getColor(data, selectedCountryId, 'Id'),
      }}>
      <Button label="Teams" onPress={() => navigateTo('Teams')} />
      <Button label="Players" onPress={() => navigateTo('Players')} />
      <Button label="Platform" onPress={() => navigateTo('Platform')} />

      {selectedCountry && selectedCountryId ? (
        <View style={{ backgroundColor: 'white', padding: 16 }}>
          <Text>{`Name:${selectedCountry.name} \nContinent:${
            selectedCountry.continent
          } \nPopulation:${selectedCountry.population}`}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Home;
