// @flow

import * as React from 'react';
import Loader from 'react-loader-spinner'

type Props = {
  isLoading: boolean,
  children?: React.Node,
}

const WithLoader = (props: Props) => {
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

export default WithLoader;
