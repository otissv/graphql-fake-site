import React from 'react';
import Box from './Box-shared';
import Flex from 'react-uikit-grid';

const Stat = (props) => (
  <Box depth={1} className='Shared-stats-stat' col='1-4'>
    <h4 className='Shared-stats-stat-heading'>{props.heading}</h4>
    <div className='Shared-stats-stat-value-container'>
      <p className='Shared-stats-stat-value'>{props.value}</p>
    </div>
  </Box>
);


const Stats = (props) => {
  const items = props.items.map(item => {
    return <Stat
      key={item.heading}
      heading={item.heading}
      value={item.value}
    />;
  });

  return <Flex className='Shared-stats uk-clearfix'>
    {items}
  </Flex>;
};

export default Stats;
