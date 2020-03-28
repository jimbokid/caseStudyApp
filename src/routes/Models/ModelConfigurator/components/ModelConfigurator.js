import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ModelOverView from "./ModelOverView";
import ModelSteps from "./ModelSteps";
import WithLoader from "../../../../shared/WithLoader";

export const ModelConfiguratorContext = React.createContext();

const ModelConfigurator = props => {
  useEffect(() => {
    const {
      match: {
        params
      }
    } = props;
    props.fetchModelDetail(params.code)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    modelConfigurator,
  } = props;

  return (
    <WithLoader isLoading={modelConfigurator.isLoading}>
      <div className="pageWrapper modelConfigurator">
        <ModelConfiguratorContext.Provider value={{...props}}>
          <ModelOverView/>
          <ModelSteps/>
        </ModelConfiguratorContext.Provider>
      </div>
    </WithLoader>
  );
};

ModelConfigurator.propTypes = {
  modelConfigurator: PropTypes.object
};

export default ModelConfigurator;
