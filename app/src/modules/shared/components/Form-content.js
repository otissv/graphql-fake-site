import React from 'react';
import cleanObj from '../../../core/helpers/clean-object';


const FormContent = (props) => {
  const cleanProps = cleanObj({
    back: null,
    row: null,
    control: null
  });


  return <div {...cleanProps}>
    {props.children}
  </div>;
};

export default FormContent;
