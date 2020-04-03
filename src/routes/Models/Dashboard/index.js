// @flow
import * as React from 'react';
import DashBoard from "./components/DashBoard";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  fetchModels
} from './actions/DashBoard';

type DashBoardProps = {
  isLoading: boolean,
  models: Array<{
    code: number,
    imageUrl: string,
    priceFrom: number,
    name: string,
  }>
}

type State = {
  dashboard: DashBoardProps
}

const mapStateToProps = (state: State) => {
  return {
    dashboardState: state.dashboard
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchModels}, dispatch)
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard): React.AbstractComponent<DashBoardProps>);
