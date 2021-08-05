import React from 'react';
import './table-label.scss';

interface TableSortLabelPropsInterface {
  active: boolean;
  direction: 'asc' | 'desc';
  onClick: () => void;
  children: | JSX.Element | JSX.Element[] | string | string[];
}

function TableLabel({direction, onClick, active, children}: TableSortLabelPropsInterface) {
  return (
    <div className='table-label'
         onClick={onClick}>
      <div className='table-label__text'>
        {children}
      </div>
      {active && <>
        {direction === 'asc' ?
          <i className='material-icons'>
            arrow_upward
          </i> :
          <i className='material-icons'>
            arrow_downward
          </i>
        }
      </>
      }
    </div>
  );
}

export default TableLabel;
