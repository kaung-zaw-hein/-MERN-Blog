import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';

import useStyles from './styles'

const Navbar = () => {

  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        {/* <img className={classes.image} src={memories} alt="memories" height="60" /> */}
        <Toolbar className={ classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                        {user.result.name.charAt(0)}
                    </Avatar>
                    <Typography className={classes.userName} variant="h6">
                        {user.result.name}
                    </Typography>
                    <Button variant="container" className={classes.logout} color="secondary">
                        Logout
                    </Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" varinant="contained" color='primary'>Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar