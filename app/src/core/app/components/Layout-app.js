import React from 'react';
import Grid from 'react-uikit-grid';
import Alert from './Alert-app';
// import uikit from 'react-uikit-base';
import LoggedIn from './Logged-in-app';
import NotLoggedIn from './Not-logged-in';
// import Navigation from './Navigation-app';
import '../style-app.css';

// const Col = uikit.element();

const Layout = (props) => {
  const {
    alert,
    appIsLoggedIn,
    children,
    location,
    // handleLogOut
  } = props;

  const flashMessage = <Alert className='App-Alert' {...alert} />;

  return <Grid className='App-Layout'>
    {appIsLoggedIn 
      ? <LoggedIn
          appIsLoggedIn={appIsLoggedIn}
          children={children}
          flashMessage={flashMessage}
          location={location}
        />
      : <NotLoggedIn
          children={children}
          flashMessage={flashMessage}
        />
    }
  </Grid>;
};

export default Layout;

