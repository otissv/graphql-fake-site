import React from 'react';
import uikit from 'react-uikit-base';

const Col = uikit.element();

const NotLoggedIn = (props) => (
  <Col col='1-1' className='App-page'>
      {props.flashMessage}
      {props.children}
  </Col>
);

export default NotLoggedIn;
