import React from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import actions from '../../../actions';
import mapStateToProps from '../../../mapStateToProps';
import getClassMethods from '../../../core/helpers/get-class-methods';


class SharedContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }


  render () {
    const Component = this.props.component;

    return <Component {...getClassMethods(this)} />;
  }
}

export default connect(mapStateToProps, actions)(SharedContainer);


