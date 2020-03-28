import React from 'react';
import PropTypes from 'prop-types';

const Index = props => {
  return (
    <button className={`${props.className ? props.className : ''} pageButton`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
};

export default Index;
