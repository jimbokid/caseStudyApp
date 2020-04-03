// @flow
import type {DashboardAction} from '../types/Action';
import type {DashboardState} from '../types/State';
import {types} from '../actions/DashBoard';

export const defaultState = {
  isLoading: true,
  models: []
};

export default (state: DashboardState = defaultState, action: DashboardAction): DashboardState => {
  switch (action.type) {
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
        models: action.payload.models
      }
    }

    default:
      return {...state};
  }
}
