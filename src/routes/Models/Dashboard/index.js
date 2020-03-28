import DashBoard from "./components/DashBoard";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  fetchModels
} from './actions/DashBoard';

const mapStateToProps = ({dashboard}) => {
  return {
    dashboardState: dashboard
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchModels}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
