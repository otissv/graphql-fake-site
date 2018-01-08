import React from 'react';
import '../css/style-shared.css';
import uikit from 'react-uikit-base';
import Loading from './Loading-shared';
import velocity from 'velocity-animate';


class BoxContent extends React.Component {
  componentDidMount () {
    const {
      kitid
    } = this.props;

    const element = document.querySelector(`[data-kitid="${kitid}"]`);

    velocity(element, 
      {
        translateY: [0, 200],
        opacity: [1, 0]
      }
    );
  }

  render () {
    const {
      border,
      children,
      className,
      classes,
      depth,
      heading,
      kitid,
      style
    } = this.props;

    const styles = { 
      border: border ? '1px solid #efefef' : null, 
      ...style
    };

    const classNames = [
      'Shared-box',
      depth ? `u-depth-${depth}` : '',
      classes || '',
      className || className : ''
    ].join(' ');

    return <div 
      className={classNames} 
      style={styles}
      data-kitid={kitid}
      >
        {heading ? <h3>{heading}</h3> : null}
        { children }
      </div>
  }
}
const Box = (props) => {
  return props.loading 
    ? <Loading /> 
    : <BoxContent {...props }/>;
};

export default uikit.base(Box);
