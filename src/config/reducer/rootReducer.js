import {combineReducers} from 'redux';
import dashboard from "../../routes/Models/Dashboard/reducer/dashboard";
import modelConfigurator from "../../routes/Models/ModelConfigurator/reducer/modelConfigurator";

const appReducer = combineReducers({
  dashboard,
  modelConfigurator
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
