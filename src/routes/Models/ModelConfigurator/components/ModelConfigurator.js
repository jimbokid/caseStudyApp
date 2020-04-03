// @flow
import * as React from 'react';
import ModelOverView from "./ModelOverView";
import ModelSteps from "./ModelSteps";
import WithLoader from "../../../../shared/WithLoader";
import type {ModelData, SelectedModel} from '../types/ModelDataTypes'

type ModelConfiguratorProps = {
  isLoading: boolean,
  modelData: ModelData,
  selected: SelectedModel
}

type ParamsProps = {
  code: string,
  type: string
}

type MatchProps = {
  params: ParamsProps
}

type historyProps = {
  push: (path: string) => void
}

export type Props = {
  modelConfigurator: ModelConfiguratorProps,
  fetchModelDetail: (code: string) => void,
  match: MatchProps,
  submitConfigurator: () => Promise<void>,
  history: historyProps,
  handleTrim: (trimName: string) => void,
  handleColor: (colorName: string) => void
}

export const ModelConfiguratorContext: React.Context<Props> = React.createContext<any>();

const ModelConfigurator = (props: Props) => {
  React.useEffect(() => {
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

export default ModelConfigurator;
