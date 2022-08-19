import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import decode from 'jwt-decode';
import useStyles from './styles'
import { useDispatch } from 'react-redux';

const Navbar = () => {

  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    
    dispatch({ type: 'LOGOUT'});
    
    history.push('/');

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if(token) {
      const decodeToken = decode(token);

      if(decodeToken.exp * 1000 < new Date().getTime()){
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])
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
                    <Button variant="container" className={classes.logout} color="secondary" onClick={logout}>
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