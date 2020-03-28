import React, {Fragment} from 'react';
import Button from "../../../../shared/Button/";
import {ModelConfiguratorContext} from "./ModelConfigurator";
import {formatNumber} from "../../../../utils/globalUtils";

const TrimSelect = () => {
  const {
    modelConfigurator,
    handleTrim
  } = React.useContext(ModelConfiguratorContext);

  if (!modelConfigurator.modelData) {
    return null
  }

  const {
    modelData: {
      trims
    }
  } = modelConfigurator

  return (
    <Fragment>
      <div className="pageTitle">
        CHOOSE EQUIPMENT LEVEL
      </div>

      <div className="modelConfigurator__trims">
        {Object.keys(trims).map((trimName, key) => {
          const trim = trims[trimName];
          const isActive = modelConfigurator.selected.trimName === trimName
          return (
            <Button className={`${isActive ? 'active' : ''} modelConfigurator__trim`} onClick={() => {
              handleTrim(trimName)
            }} key={key}>
              {trim.name}
              <div className="modelConfigurator__buttonPrice">
                {formatNumber(trim.price)}
              </div>
            </Button>
          )
        })}
      </div>
    </Fragment>
  );
};

export default TrimSelect;
