// @flow
import {types} from '../actions/ModelConfigurator';

import type {ModelConfiguratorAction} from '../types/Action';
import type {ModelConfiguratorState} from '../types/State'

export const defaultState = {
  isLoading: true,
  modelData: {
    code: '',
    name: '',
    trims: {}
  },
  selected: {
    trimName: '',
    colorName: ''
  }
};

export default (state: ModelConfiguratorState = defaultState, action: ModelConfiguratorAction): ModelConfiguratorState => {
  switch (action.type) {

    case types.CONFIGURATOR_SUBMIT_LOADER_HANDLE: {
      return {
        ...state,
        isLoading: !state.isLoading
      }
    }

    case types.CONFIGURATOR_FETCH_MODEL_START: {
      return {
        ...state,
        isLoading: true
      }
    }

    case types.CONFIGURATOR_FETCH_MODEL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        modelData: action.payload.modelData,
        selected: {
          ...state.selected,
          trimName: action.payload.defaultTrim,
          colorName: action.payload.defaultColor
        }
      }
    }

    case types.CONFIGURATOR_UPDATE_TRIM: {
      return {
        ...state,
        selected: {
          ...state.selected,
          trimName: action.payload.trimName,
          colorName: action.payload.colorName
        }
      }
    }

    case types.CONFIGURATOR_UPDATE_COLOR: {
      return {
        ...state,
        selected: {
          ...state.selected,
          colorName: action.payload.colorName
        }
      }
    }

    default:
      return {...state};
  }
}
