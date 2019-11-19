import { TEST_ACTION } from '../constants/actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default reducer;
