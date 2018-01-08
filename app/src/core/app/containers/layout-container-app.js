import React from 'react';
import actions from '../../../actions';
import autobind from 'class-autobind';
import getClassMethods from '../../helpers/get-class-methods';
import mapStateToProps from '../../../mapStateToProps';
// import { localAuth } from '../../local/services-local';
import { connect } from 'react-redux';
// import velocity from 'velocity-animate';

class LayoutContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }
  
  // componentWillMount () {
  //   this.props.getLocalStorage();
  //   const routes = this.props.route.childRoutes.map(route => route.path).sort();
  //   this.props.setRoutes(routes);

  //   if (window.app.routes) window.app.routes = routes;
  // }


  // componentDidMount () {
  //   const {
  //     appEnteredLocation,
  //     getViewActions,
  //     loggedIn,
  //     redirectTo,
  //     setViewActions
  //   } = this.props;

  //   const { id, token } = localAuth();
    
  //   if (id && token) {
  //     getViewActions().payload
  //       .then(
  //         response => {
  //           const viewFindAll = response.data.viewFindAll;
            
  //           if (viewFindAll == null || viewFindAll.length === 0) {
  //             return Promise.reject('No roles found');
  //           } else {
  //             setViewActions(viewFindAll);
  //             loggedIn(true);
  //             redirectTo(appEnteredLocation);
  //           }
  //         },
  //         error => Promise.reject(error)
  //       )
  //       .catch(errors => console.log(errors));
  //   }

  //   const splash = document.querySelector('.Splash-screen');

  //   velocity(
  //     splash,
  //     {
  //       translateY: ['-100%', '0%']
  //     },
  //     { display: 'none' },
  //   );
  // }


  // handleLogOut (e) {
  //   e.preventDefault();

  //   const {
  //     deleteLocalStorage,
  //     loggedIn
  //   } = this.props;

  //   deleteLocalStorage();
  //   loggedIn(false);
  // }


  render () {
    const Component = this.props.component;

    return <Component {...getClassMethods(this)} />;
  }
}

export default connect(mapStateToProps, actions)(LayoutContainer);


