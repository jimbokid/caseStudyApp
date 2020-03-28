import React from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';

const WithLoader = props => {
  const {
    isLoading
  } = props;
  return (
    <div className="loader">
      {isLoading ? (
        <div className="loader__container">
          <Loader
            type="Triangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      ) : props.children}
    </div>
  );
};

WithLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default WithLoader;
