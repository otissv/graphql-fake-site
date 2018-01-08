import React from 'react';
import uikit from 'react-uikit-base';
import Label from './Label-shared';
import titleize from '../../../core/helpers/titleize';

const Row = (props) => {
  const label = props.label ? <Label>{props.label}:</Label> : null;
  const value = !props.titleize ? props.value : titleize(props.value);

  if (props.value) {
    return <div className='Shared-row'>
      {label} {value}
    </div>;
  } else {
    return null;
  }

};

export default uikit.base(Row);
