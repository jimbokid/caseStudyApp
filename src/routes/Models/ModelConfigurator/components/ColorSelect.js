// @flow
import React, {Fragment} from 'react';
import {ModelConfiguratorContext} from "./ModelConfigurator";
import {formatNumber} from "../../../../utils/globalUtils";

const ColorSelect = () => {
  const {
    modelConfigurator,
    handleColor
  } = React.useContext(ModelConfiguratorContext);

  if (!modelConfigurator.modelData) {
    return null
  }

  const {
    trimName
  } = modelConfigurator.selected;
  const {
    colors
  } = modelConfigurator.modelData.trims[trimName];

  return (
    <Fragment>
      <div className="pageTitle">
        CHOOSE EQUIPMENT LEVEL
      </div>
      <div className="modelConfigurator__colors">
        {Object.keys(colors).map((colorName, key) => {
          const color = colors[colorName];
          const isActive = modelConfigurator.selected.colorName === colorName

          return (
            <div className={`${isActive ? 'active' : ''} modelConfigurator__colorButton`} onClick={() => {
              handleColor(colorName)
            }} key={key}>
              <img src={color.iconUrl} alt="" className="modelConfigurator__colorImage"/>
              <div className="modelConfigurator__colorsTitle">
                {color.name}
              </div>
              {color.price !== 0 && (
                <div className="modelConfigurator__colorsPrice">
                  {formatNumber(color.price)}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Fragment>
  );
};

export default ColorSelect;
