import ModelConfigurator from "./components/ModelConfigurator";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  fetchModelDetail,
  handleTrim,
  handleColor,
  submitConfigurator
} from "./actions/ModelConfigurator";
import {getModelConfiguratorState} from "./selectors";

const mapStateToProps = (state) => {
  return {
    modelConfigurator: getModelConfiguratorState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchModelDetail, handleTrim, handleColor, submitConfigurator}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModelConfigurator);
