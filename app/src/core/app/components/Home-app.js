import React from 'react';
import titleize from '../../helpers/titleize';


class Home extends React.Component {
  render () {
    const {
      localAuth,
      appIsLoggedIn
    } = this.props;

    const welcome = appIsLoggedIn && localAuth.firstName && localAuth.lastName
      ? <div>
        <h2>Hi {titleize(localAuth.firstName)}!</h2>
        <h3>Welcome to Fake.</h3>
      </div>
      : <h1>Welcome to Fake.</h1>;
    return <div>
      {welcome}
    </div>;
  }
};

export default Home;
