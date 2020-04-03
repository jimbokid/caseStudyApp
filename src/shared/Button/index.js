// @flow
import * as React from 'react';

type Props = {
  className: string,
  children?: React.Node,
  onClick?: () => void
}

const Button = (props: Props) => {
  return (
    <button className={`${props.className ? props.className : ''} pageButton`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
