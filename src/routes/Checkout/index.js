import React from 'react';
import {ReactComponent as SuccessIcon} from '../../assets/success.svg';
import {ReactComponent as FailureIcon} from '../../assets/failure.svg';

const Checkout = props => {
  const {
    match: {
      params: {
        status,
      }
    },
  } = props;

  return (
    <div className="checkout">
      {status === 'success' ? <SuccessIcon/> : <FailureIcon/>}
    </div>
  );
};

export default Checkout;
