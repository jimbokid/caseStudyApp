import DashBoard from "./components/DashBoard";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  fetchModels
} from './actions/DashBoard';
import {getDashboardState} from "./selectors";

const mapStateToProps = (state) => {
  return {
    dashboardState: getDashboardState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchModels}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
