import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import mapStateToProps from '../../../mapStateToProps';
import titleize from '../../helpers/titleize';
import NavigationNotLoggedIn from './Navigation-not-logged-in';
import NavigationLoggedIn from './Navigation-logged-in';
import {
  ROOT_ROUTE
} from '../../constants/routes-constants';

/* <img className='App-logo' height='30px' width='30px' src={logo} alt='logo'/> */
class Navigation extends React.Component {
  
  render () {
    const { 
      localAuth,
      onLogOut,
      appIsLoggedIn
    } = this.props;

    const user = localAuth ? `${titleize(localAuth.firstName)}` : '';

    return <nav className='uk-navbar App-navigation-navbar'>
      <Link className='uk-navbar-brand' to={ROOT_ROUTE}> 
          GraphQL Fake
      </Link>
      <div className='uk-navbar-flip'>
        { 
          appIsLoggedIn 
          ? <NavigationLoggedIn fullName={user} onLogOut={onLogOut}/> 
          : <NavigationNotLoggedIn/>
        }
      </div>
    </nav>;
  }
}


Navigation.propTypes = {
  appIsLoggedIn: React.PropTypes.bool
};

export default connect(mapStateToProps)(Navigation);
