// @flow

import type {ModelData} from "./ModelDataTypes";

export type ColorsProps = {
  [colorName: string]: {
    name: string,
    iconUrl: string,
    imageUrl: string,
    price: number,
  }
}

export type TrimsProps = {
  [trimName: string]: {
    name: string,
    price: number,
    colors: ColorsProps
  }
}

export type SubmitLoaderHandler = {
  type: 'CONFIGURATOR_SUBMIT_LOADER_HANDLE',
  payload?: any
}

export type ConfiguratorFetchModelStart = {
  type: 'CONFIGURATOR_FETCH_MODEL_START',
  payload?: any
}

export type ConfiguratorFetchModelSuccess = {
  type: 'CONFIGURATOR_FETCH_MODEL_SUCCESS',
  payload: {
    modelData: ModelData,
    defaultTrim: string,
    defaultColor: string
  }
}

export type ConfiguratorUpdateTrim = {
  type: 'CONFIGURATOR_UPDATE_TRIM',
  payload: {
    trimName: string,
    colorName: string,
  }
}

export type ConfiguratorUpdateColor = {
  type: 'CONFIGURATOR_UPDATE_COLOR',
  payload: {
    colorName: string
  }
}

export type ModelConfiguratorAction =
  SubmitLoaderHandler
  | ConfiguratorFetchModelStart
  | ConfiguratorFetchModelSuccess
  | ConfiguratorUpdateTrim
  | ConfiguratorUpdateColor;
