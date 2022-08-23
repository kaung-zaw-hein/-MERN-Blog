import React from 'react'
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ half, name, handleChange, label, type, handleShowPassword  }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
        name={ name } 
        label={label}
        onChange={handleChange} 
        variant="standard"
        required
        fullWidth
        type={type}
        InputProps={ (name === 'password' || name === 'confirmPassword' ) ? {
             endAdornment : (
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
             )
        } : null }
        />
    </Grid>
  )
}

export default Input