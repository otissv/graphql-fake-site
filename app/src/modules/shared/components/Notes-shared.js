import React from 'react';
import uikit from 'react-uikit-base';
import Box from './Box-shared';


const Notes = (props) => {
  // const items = props.items.map(note => <p key={note.id}>{note}</p>);
  if (props.items && props.items.length > 0) {
    return <Box border margin='top'>
      <h3>Notes</h3>

      {props.items.map(item => <p key={item.id}>{item.note}</p>)}
    </Box>;
  } else {
    return null;
  }
};


export default uikit.base(Notes);
