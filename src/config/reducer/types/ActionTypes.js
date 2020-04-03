// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

import type {DashboardAction} from "../../../routes/Models/Dashboard/types/Action";
import type {ModelConfiguratorAction} from "../../../routes/Models/ModelConfigurator/types/Action";


export type ActionTypes = DashboardAction | ModelConfiguratorAction
export type Dispatch = ReduxDispatch<ActionTypes>;
