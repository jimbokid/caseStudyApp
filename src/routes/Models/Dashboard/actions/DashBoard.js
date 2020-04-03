// @flow
import type {Models} from '../types/Models';
import {api} from "../../../../config/axios/axios";
import type {ActionTypes} from "../../../../config/reducer/types/ActionTypes";
import type {StateTypes} from "../../../../config/reducer/types/StateTypes";

/* eslint-disable */
type Dispatch = (action: ActionTypes | ThunkAction | PromiseAction) => any;
type GetState = () => StateTypes;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<ActionTypes>;
/* eslint-enable */

export const types = {
  DASHBOARD_FETCH_MODELS_START: 'DASHBOARD_FETCH_MODELS_START',
  DASHBOARD_FETCH_MODELS_SUCCESS: 'DASHBOARD_FETCH_MODELS_SUCCESS'
}

export const fetchModelsStart = () => ({
  type: types.DASHBOARD_FETCH_MODELS_START,
});

export const fetchModelsSuccess = (models: Models) => ({
  type: types.DASHBOARD_FETCH_MODELS_SUCCESS,
  payload: {
    models
  }
});

export const fetchModels = (): ThunkAction => (dispatch: Dispatch) => {
  dispatch(fetchModelsStart())

  return api.get(`/cars/models`).then(res => {
    dispatch(fetchModelsSuccess(res.data))
  });
}
