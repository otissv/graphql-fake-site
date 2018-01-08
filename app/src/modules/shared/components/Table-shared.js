import React from 'react';
import UikitTable from 'react-uikit-table';

const Table = (props) => {
  const {
    className,
    caption,
    head,
    items,
    children
  } = props;

  const classNames = [
    'App-table',
    className
  ].join(' ');

  return <UikitTable
    className={classNames}
    caption={caption}
    striped
    hover
    head={head}
  >
    <tbody>
      {items}
      {children}
    </tbody>
  </UikitTable>;  
};

export default Table;
