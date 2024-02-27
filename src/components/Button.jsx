import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation(props) {
  return (
    <div className='button-div'>

    <Button variant="contained" disableElevation className='start-button'>
      {props.text}
    </Button>

    </div>
  );
}