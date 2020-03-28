import {createSelector} from 'reselect'
// selector
const getModelConfigurator = (state) => state.modelConfigurator
// reselect function
export const getModelConfiguratorState = createSelector(
  [getModelConfigurator],
  (modelConfigurator) => modelConfigurator
)
