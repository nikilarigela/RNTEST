import { Picker } from '@react-native-community/picker';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
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

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getColor(
          countries.data,
          countries.selectedCountryId,
          'Id',
        ),
      }}>
      <Picker
        selectedValue={countries.selectedCountryId}
        style={{
          height: 50,
          width: '80%',
          backgroundColor: 'white',
          marginBottom: 16,
        }}
        onValueChange={itemValue =>
          dispatch({ type: SELECT_COUNTRY, payload: itemValue })
        }>
        {countries.data.map(item => (
          <Picker.Item key={item.Id} label={item.name} value={item.Id} />
        ))}
      </Picker>
      {countries.selectedCountryId ? (
        <Image
          style={{ height: 50, width: 100 }}
          source={Images[countries.selectedCountryId]}
        />
      ) : null}
    </View>
  );
};

export default Teams;
