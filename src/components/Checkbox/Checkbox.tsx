/* 
    Checkbox donated by
    https://codepen.io/AllThingsSmitty/pen/WjZVjo
*/

import React from 'react';

interface CheckboxProps {
  onClick?: Function;
  active?: boolean;
  children?: React.ReactNode;
}

export default function Checkbox({
  onClick = () => {},
  active = false,
  children,
}: CheckboxProps) {
  return (
    <div className="flex flex-row round">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox flex"
        disabled={active}
        onClick={(e) => onClick(e)}
        style={{ width: '32px', height: '32px', borderRadius: '32px' }}
      />
      <label htmlFor="checkbox" className="flex"></label>
      <div>{children}</div>
    </div>
  );
}
