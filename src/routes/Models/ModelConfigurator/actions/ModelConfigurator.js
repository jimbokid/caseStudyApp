import {api} from "../../../../config/axios/axios";

import {reformatModelData} from "../utils/modelConfiguratorUtils";

export const types = {
  CONFIGURATOR_FETCH_MODEL_START: 'CONFIGURATOR_FETCH_MODEL_START',
  CONFIGURATOR_FETCH_MODEL_SUCCESS: 'CONFIGURATOR_FETCH_MODEL_SUCCESS',
  CONFIGURATOR_UPDATE_TRIM: 'CONFIGURATOR_UPDATE_TRIM',
  CONFIGURATOR_UPDATE_COLOR: 'CONFIGURATOR_UPDATE_COLOR',
  CONFIGURATOR_SUBMIT_LOADER_HANDLE: 'CONFIGURATOR_SUBMIT_LOADER_HANDLE',
}

export const submitConfiguratorLoaderHandle = () => ({
  type: types.CONFIGURATOR_SUBMIT_LOADER_HANDLE
});

export const updateSelectedTrim = (trimName, colorName) => ({
  type: types.CONFIGURATOR_UPDATE_TRIM,
  payload: {
    trimName,
    colorName
  }
})

export const handleColor = (colorName) => ({
  type: types.CONFIGURATOR_UPDATE_COLOR,
  payload: {
    colorName
  }
})

export const fetchModelDetailStart = () => ({
  type: types.CONFIGURATOR_FETCH_MODEL_START
});

export const fetchModelDetailSuccess = (modelData, defaultTrim, defaultColor) => ({
  type: types.CONFIGURATOR_FETCH_MODEL_SUCCESS,
  payload: {
    modelData,
    defaultTrim,
    defaultColor
  }
});

export const fetchModelDetail = (modelCode) => (dispatch) => {
  dispatch(fetchModelDetailStart())
  return api.get(`/cars/model/${modelCode}`).then(res => {
    const {reformatResponse, defaultTrim, defaultColor} = reformatModelData(res.data);
    dispatch(fetchModelDetailSuccess(reformatResponse, defaultTrim, defaultColor))
  })
};

export const handleTrim = trimName => (dispatch, getState) => {
  const {
    modelData
  } = getState().modelConfigurator;

  const defaultColor = Object.keys(modelData.trims[trimName].colors)[0]

  dispatch(updateSelectedTrim(trimName, defaultColor))
}

export const submitConfigurator = () => (dispatch, getState) => {
  dispatch(submitConfiguratorLoaderHandle())
  const {
    modelData,
    selected
  } = getState().modelConfigurator;

  const payload = {
    modelName: modelData.name,
    trimName: selected.trimName,
    colorName: selected.colorName
  }
  return api.post(`cars/lead`, payload).then(() => {
    dispatch(submitConfiguratorLoaderHandle());
    return Promise.resolve()
  }).catch(() => {
    dispatch(submitConfiguratorLoaderHandle());
    return Promise.reject()
  })
};
