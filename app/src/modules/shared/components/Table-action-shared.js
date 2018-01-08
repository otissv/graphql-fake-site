import React from 'react';
import { Link } from 'react-router';
import Icons from 'react-uikit-icons';

const TableAction = ({ item, onClick, onRemove, view, edit }) => (
  <td data-rowdata={item.id}>
    { view
      ? <Link
        onClick={onClick}
        to={`${view}/${item.id}`}
      >
        <Icons icon='eye' className='Table-action-icon'/>
      </Link>
      : null
    }

    { edit
      ? <Link
        onClick={onClick}
        to={`${edit}/${item.id}`}
      >
        <Icons icon='edit' className='Table-action-icon'/>
      </Link>
      : null
    }
    
    { onRemove
      ? <a onClick={onRemove}>
        <Icons icon='trash-o' className='Table-action-icon'/>
      </a>
      : null
    }
  </td>
);

export default TableAction;
