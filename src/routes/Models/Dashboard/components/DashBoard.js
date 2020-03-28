import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import WithLoader from "../../../../shared/WithLoader";
import ModelCard from "./ModelCard";

const DashBoard = props => {
  useEffect(() => {
    props.fetchModels()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const {
    dashboardState
  } = props;

  return (
    <WithLoader isLoading={dashboardState.isLoading}>
      <div className="pageWrapper">
        <div className="dashBoard">
          <div className="pageTitle">
            CHOOSE YOUR NEW CAR
          </div>
          <div className="dashBoard__modelsWrapper">
            {dashboardState.models.map((model, key) => (
              <ModelCard model={model} key={key}/>
            ))}
          </div>
        </div>
      </div>
    </WithLoader>
  );
};

DashBoard.propTypes = {
  dashboardState: PropTypes.object,
  fetchModels: PropTypes.func
};

export default DashBoard;
