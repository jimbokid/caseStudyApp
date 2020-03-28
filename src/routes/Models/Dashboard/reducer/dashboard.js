import {types} from '../actions/DashBoard';

export const defaultState = {
  isLoading: true,
  models: []
};

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case types.DASHBOARD_FETCH_MODELS_START: {
      return {
        ...state,
        isLoading: true
      }
    }

    case types.DASHBOARD_FETCH_MODELS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        models: payload.models
      }
    }

    default:
      return {...state};
  }
}
