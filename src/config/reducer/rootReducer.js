//@flow

import {combineReducers} from 'redux';
import dashboard from "../../routes/Models/Dashboard/reducer/dashboard";
import modelConfigurator from "../../routes/Models/ModelConfigurator/reducer/modelConfigurator";
import type {StateTypes} from "./types/StateTypes";
import type {ActionTypes} from "./types/ActionTypes";

const appReducer = combineReducers({
  dashboard,
  modelConfigurator
});

const rootReducer = (state: StateTypes | *, action: ActionTypes) => {
  return appReducer(state, action);
};

export default rootReducer;
