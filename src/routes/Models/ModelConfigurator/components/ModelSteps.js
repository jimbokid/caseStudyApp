// @flow
import * as React from 'react';
import Button from "../../../../shared/Button/";
import TrimSelect from "./TrimSelect";
import {ModelConfiguratorContext} from "./ModelConfigurator";
import {ReactComponent as NavigationArrow} from '../../../../assets/navigationArrow.svg';
import {Link} from 'react-router-dom';
import ColorSelect from "./ColorSelect";

const ModelSteps = () => {
  const {
    match: {
      params: {
        type,
        code
      }
    },
    submitConfigurator,
    history
  } = React.useContext(ModelConfiguratorContext);

  function submitSteps() {
    submitConfigurator().then(() => {
      history.push('/checkout/success')
    }).catch(() => {
      history.push('/checkout/failure')
    })
  }

  return (
    <div className="modelConfigurator__steps">
      <div className="modelConfigurator__interactionPanel">
        <div className="modelConfigurator__content">
          {type === 'trim' && <TrimSelect/>}
          {type === 'colors' && <ColorSelect/>}
        </div>

        <div className="modelConfigurator__navigation">
          <Link to={type === 'trim' ? `/models/` : `/models/${code}/trim`} className="styles_navigationButton">
            <Button className={"modelConfigurator__navigationButton backButton noBorder"}><NavigationArrow/></Button>
          </Link>

          {type === 'colors' && <Button className={"modelConfigurator__navigationButton active"}
                                        onClick={submitSteps}>PROCEED</Button>}

          <Link to={`/models/${code}/colors`} className="styles_navigationButton">
            <Button
              className={`modelConfigurator__navigationButton active ${type === 'colors' ? 'hide' : ''}`}><NavigationArrow/></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelSteps;
