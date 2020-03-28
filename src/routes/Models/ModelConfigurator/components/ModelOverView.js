import React from 'react';
import PropTypes from 'prop-types';
import {formatNumber} from "../../../../utils/globalUtils";
import {
  ModelConfiguratorContext
} from './ModelConfigurator';
import {calculateTotalPrice} from "../utils/modelConfiguratorUtils";


const ModelOverView = () => {
  const {
    modelConfigurator
  } = React.useContext(ModelConfiguratorContext);

  if (!modelConfigurator.modelData) {
    return null
  }

  const activeModel = modelConfigurator.selected.trimName ? modelConfigurator.modelData.trims[modelConfigurator.selected.trimName] : null;
  const colorName = modelConfigurator.selected.colorName
  const modelName = modelConfigurator.modelData.name;
  const price = calculateTotalPrice(activeModel,modelConfigurator.selected)

  return (
    <div className="modelConfigurator__overview">
      <img src={activeModel.colors[colorName].imageUrl} alt="" className="modelConfigurator__image"/>
      <div className="modelConfigurator__name">
        {modelName}
        <span className="modelConfigurator__trimName"> {activeModel.name}</span>
        <div className="modelConfigurator__color">{colorName}</div>
      </div>
      <div className="modelConfigurator__price">{formatNumber(price)}</div>
    </div>
  );
};

ModelOverView.propTypes = {
  modelConfigurator: PropTypes.object
};

export default ModelOverView;
