// @flow

import type {Models} from './Models'

export type FetchModelsActionSuccess = {
  type: 'DASHBOARD_FETCH_MODELS_SUCCESS',
  payload: {
    models: Models
  } | any
}

export type FetchModelsActionStart = {
  type: 'DASHBOARD_FETCH_MODELS_START',
  payload?: any
}

export type DashboardAction = FetchModelsActionStart | FetchModelsActionSuccess;
