// @flow
import * as React from 'react';
import {ReactComponent as SuccessIcon} from '../../assets/success.svg';
import {ReactComponent as FailureIcon} from '../../assets/failure.svg';

type Props = {
  match: {
    params: {
      status: string
    }
  }
}

const Checkout = (props: Props) => {
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
