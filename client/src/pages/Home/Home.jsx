import React,  { useState, useEffect } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import { getPosts } from '../../actions/posts';

import useStyles from './styles';

const Home = () => {

    const [ currentId, setCurrentId ] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId ,dispatch]);

  return (
    <Grow in>
        <Container>
            <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home