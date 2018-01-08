import React from 'react';
import Button from 'react-uikit-button';


function goBack () {
  return () => window.history.back();
}

const SharedButton = (props) => {
  const cleanProps = {
    ...props,
    back: null,
    row: null,
    control: null
  };

  let onClick;

  if (props.onClick) {
    onClick = props.onClick;
  } else if (props.back) {
    onClick = goBack();
  }

  return <Button 
    {...cleanProps} 
    onClick={onClick}
    className='u-depth-1'
  >
    {props.children}
  </Button>;
};

export default SharedButton;
