import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import ChipInput from 'material-ui-chip-input';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [ postData, setPostData ] = useState({ title:'', message:'', tags:[], selectedFile:''}); 
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handlerSubmit = (e) => {

      e.preventDefault();

      if (currentId === 0) {
        dispatch(createPost({ ...postData, name: user?.result?.name }, history));
        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        clear();
      }
  };
    
    const clear= () => {
      setCurrentId(0);
      setPostData({ title: '', message: '', tags: [], selectedFile: '' });
    };
    
    if(!user?.result?.name) {
      return (
        <Paper className={classes.paper} elevation={6}>
          <Typography variant="h6" align="center">
            Please Sign In to create your own blog, like and comment other's blogs.
          </Typography>
        </Paper>
      )
    }

    const handleAddChip = (tag) => {
      setPostData({ ...postData, tags: [...postData.tags, tag] });
    };
  
    const handleDeleteChip = (chipToDelete) => {
      setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
    };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handlerSubmit}>
        <Typography variant='h6'>{ currentId ? 'Editing' : 'Creating'  }</Typography>
        <TextField name="title" variant="standard" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="standard" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="standard"
            label="Tags"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small"onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form