import {types} from '../actions/ModelConfigurator';

export const defaultState = {
  isLoading: true,
  modelData: null,
  selected: {
    trimName: '',
    colorName: ''
  }
};

export default (state = defaultState, {type, payload}) => {
  switch (type) {

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
        modelData: payload.modelData,
        selected: {
          ...state.selected,
          trimName: payload.defaultTrim,
          colorName: payload.defaultColor
        }
      }
    }

    case types.CONFIGURATOR_UPDATE_TRIM: {
      return {
        ...state,
        selected: {
          ...state.selected,
          trimName: payload.trimName,
          colorName: payload.colorName
        }
      }
    }

    case types.CONFIGURATOR_UPDATE_COLOR: {
      return {
        ...state,
        selected: {
          ...state.selected,
          colorName: payload.colorName
        }
      }
    }

    default:
      return {...state};
  }
}
