import ModelConfigurator from "./components/ModelConfigurator";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  fetchModelDetail,
  handleTrim,
  handleColor,
  submitConfigurator
} from "./actions/ModelConfigurator";

const mapStateToProps = ({modelConfigurator}) => {
  return {
    modelConfigurator: modelConfigurator
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchModelDetail, handleTrim, handleColor, submitConfigurator}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModelConfigurator);
