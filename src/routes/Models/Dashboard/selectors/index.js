import {createSelector} from 'reselect'
// selector
const getDashboard = (state) => state.dashboard
// reselect function
export const getDashboardState = createSelector(
  [getDashboard],
  (dashboard) => dashboard
)
