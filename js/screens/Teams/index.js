import { Picker } from '@react-native-community/picker';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COUNTRIES, SELECT_COUNTRY } from '../../constants/actions';
import { getColor, Images } from '../../utils';

const Teams = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesReducer);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.myjson.com/bins/t1z01')
        .then(res => res.json())
        .then(res => dispatch({ type: ADD_COUNTRIES, payload: res.countries }))
        .catch(e => console.log(e));
    };
    fetchData();
  }, [dispatch]);

  const { data, selectedCountryId } = countries;
  const selectedCountry = data.find(item => item.Id === selectedCountryId);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: getColor(data, selectedCountryId, 'Id'),
      }}>
      {selectedCountryId ? (
        <Image
          style={{ height: 70, width: 100, marginVertical: 16 }}
          resizeMethod="auto"
          resizeMode="contain"
          source={Images[selectedCountryId] || Images[0]}
        />
      ) : null}
      {selectedCountry && selectedCountryId ? (
        <View
          style={{ backgroundColor: 'white', padding: 16, marginVertical: 16 }}>
          <Text>{`Name:${selectedCountry.name} \nContinent:${
            selectedCountry.continent
          } \nPopulation:${selectedCountry.population}`}</Text>
        </View>
      ) : null}
      <View
        style={{
          height: 50,
          width: '80%',
          backgroundColor: 'white',
          marginBottom: 16,
        }}>
        <Picker
          styl={{ flex: 1 }}
          selectedValue={selectedCountryId}
          itemStyle={{ backgroundColor: 'white' }}
          onValueChange={itemValue =>
            dispatch({ type: SELECT_COUNTRY, payload: itemValue })
          }>
          {data.map(item => (
            <Picker.Item key={item.Id} label={item.name} value={item.Id} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default Teams;
