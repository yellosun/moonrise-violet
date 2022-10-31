import React from 'react';
import { Switch as CoreSwitch, withStyles } from '@material-ui/core';

export const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: 'lightgray',
    '&$checked': {
      transform: 'translateX(12px)',
      color: 'white',
      '& + $track': {
        opacity: 1,
        backgroundColor: 'black',
        borderColor: 'black',
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'black',
  },
  checked: {},
}))(CoreSwitch);



export default function Switch({ checked, onChange }) {
	return <AntSwitch checked={checked} onChange={onChange} name="switch" />
}


