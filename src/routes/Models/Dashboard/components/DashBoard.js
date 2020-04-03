// @flow
import * as React from 'react';
import WithLoader from "../../../../shared/WithLoader";
import ModelCard from "./ModelCard";
import type {ModelItem} from "../types/Models";

type Props = {
  dashboardState: {
    isLoading: boolean,
    models: Array<ModelItem>
  },
  fetchModels: () => void,
}

const DashBoard = (props: Props) => {
  React.useEffect(() => {
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

export default DashBoard;
