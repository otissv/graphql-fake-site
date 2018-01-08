import React from 'react';
import uikit from 'react-uikit-base';

const Label = (props) => (
  <label className={`Shared-label ${props.className}`}>
    {props.children}
  </label>
);

export default uikit.base(Label);
