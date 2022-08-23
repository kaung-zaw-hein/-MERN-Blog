import React from 'react';
import { Grid, CircularProgress, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  if (!posts.length && !isLoading) return 'No posts';

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
         <CircularProgress color="secondary" style={{ width:"60px", height:"60px"}} />
      </Paper>
    );
  }

  return (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={10} lg={12}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
  );
};

export default Posts;