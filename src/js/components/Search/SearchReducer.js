const defaultState = {
  city: '',
  weather: '',
  history: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CITY': {
      return {
        ...state,
        city: payload
      };
    }

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        weather: payload
      };
    }

    case 'UPDATE_HISTORY': {
      return {
        ...state,
        history: [...state.history, payload]
      };
    }

    default: {
      return state;
    }
  }
}
