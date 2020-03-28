import {api} from "../../../../config/axios/axios";

export const types = {
  DASHBOARD_FETCH_MODELS_START: 'DASHBOARD_FETCH_MODELS_START',
  DASHBOARD_FETCH_MODELS_SUCCESS: 'DASHBOARD_FETCH_MODELS_SUCCESS'
}

export const fetchModelsStart = () => ({
  type: types.DASHBOARD_FETCH_MODELS_START
});

export const fetchModelsSuccess = models => ({
  type: types.DASHBOARD_FETCH_MODELS_SUCCESS,
  payload: {
    models
  }
});

export const fetchModels = () => (dispatch) => {
  dispatch(fetchModelsStart())

  return api.get(`/cars/models`).then(res => {
    dispatch(fetchModelsSuccess(res.data))
  });
}
