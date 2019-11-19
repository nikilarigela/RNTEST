import { ADD_COUNTRIES, SELECT_COUNTRY } from '../constants/actions';

const initialState = { data: [], selectedCountryId: '' };

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES: {
      return {
        ...state,
        data: action.payload,
        selectedCountryId: state.selectedCountryId
          ? state.selectedCountryId
          : action.payload[0].Id,
      };
    }
    case SELECT_COUNTRY: {
      return {
        ...state,
        selectedCountryId: action.payload,
      };
    }

    default:
      return state;
  }
};

export default countriesReducer;
