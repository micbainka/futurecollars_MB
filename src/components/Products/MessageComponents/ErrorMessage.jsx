import React from 'react';
import { Alert } from '@mui/material';
import "./MessageComponent.css"; 
import { Button } from '@mui/material';

export const ErrorMessage = () => {
  return (
    <div className='error-message'>
    <Alert variant="outlined" severity="error">
  Error by loading items.
  <Button variant="contained">Reload page</Button>
</Alert>
</div>
  );
};

