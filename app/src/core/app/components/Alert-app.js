import React from 'react';
import UiKitAlert from 'react-uikit-alert';
// import velocity from 'velocity-animate';

function toggleAlert ({ show, kitid }) {
  // const element = document.querySelector('.App-Alert');

  // if (show && element) {
  //   velocity(
  //     element,
  //     {
  //       opacity: [1, 0.5],
  //       translateY: [0, -300]
  //     },
  //     {display: 'block'}
  //   );
  // } else {
  //   velocity(
  //     element,
  //     {
  //       opacity: [0, 1],
  //       translateY: [-300, -0]
  //     },
  //     {display: 'none'}
  //   );
  // }
};

const Alert = (props) => {
  const cleanProps = {
    ...props,
    message: null
  };

  toggleAlert({ show: props.show, kitid: props.kitid });

  return <UiKitAlert {...cleanProps}>
    {props.message}
  </UiKitAlert>
};

export default Alert;
