import React from 'react';
import {formatNumber} from "../../../../utils/globalUtils";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ModelCard = props => {
  const {
    model
  } = props;
  return (
    <Link to={`/models/${model.code}/trim`} className="dashBoard__model">
      <img src={model.imageUrl} alt="" className="dashBoard__modelImage"/>
      <div className="dashBoard__modelText">
        <div className="dashBoard__modelTitle">
          {model.name}
        </div>
        <div className="dashBoard__modelPrice">
          {formatNumber(model.priceFrom)}
        </div>
      </div>
    </Link>
  );
};

ModelCard.propTypes = {
  model: PropTypes.object
};

export default ModelCard;
