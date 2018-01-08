import React from 'react';
import { Link } from 'react-router';
import { GRAPHIQL_ROUTE } from '../../graphiql/route-graphiql';

const NavigationNotLoggedIn = (props) => (
  <ul className='uk-navbar-nav App-navigation-navbar-nav'>
    <li><Link to={GRAPHIQL_ROUTE}>Fake</Link></li>
  </ul>
);

export default NavigationNotLoggedIn;
