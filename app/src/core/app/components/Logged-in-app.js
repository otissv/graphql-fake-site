import React from 'react';
import Sidebar from './Sidebar-app';
import Grid from 'react-uikit-grid';
import uikit from 'react-uikit-base';


const Col = uikit.element();

const LoggedIn = (props) => {
  const {
    appIsLoggedIn,
    children,
    flashMessage
  } = props;
  return <Col col='1-1'>
    <Grid>
    <Col col='1-5' className='App-sidebar'>
      {appIsLoggedIn ? <Sidebar {...props} /> : null}
    </Col>

    <Col col='4-5' className='App-page'>
      {flashMessage}
      { children }
    </Col>
    </Grid>
  </Col>;
};

export default LoggedIn;
