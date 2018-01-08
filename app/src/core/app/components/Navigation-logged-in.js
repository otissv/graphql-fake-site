import React from 'react'
import Icons from 'react-uikit-icons';
import ProfilePhoto from '../../../modules/shared/components/Profile-photo';


const NavigationLoggedIn = (props) => {
  const {
    fullName,
    onLogOut
  } = props;

  return <ul className='uk-navbar-nav App-navigation-navbar-nav'>
    <div className='uk-navbar-content'>
      <Icons className='App-navigation-navigation-icon' icon='bell' /> 
      <ProfilePhoto /> {fullName}
    </div>
    <li className='App-navigation-link' onClick={onLogOut}>
      <a href='/sign-out' >
         <Icons icon='sign-out' /> Logout
      </a>
    </li>
  </ul>;
};

export default NavigationLoggedIn;
