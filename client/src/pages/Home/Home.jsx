import React,  { useState } from 'react';
import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import { getPostsBySearch } from '../../actions/posts';

import useStyles from './styles';
import Pagination from '../../components/Pagination/Pagination';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {

    const [ currentId, setCurrentId ] = useState(0);
    const [ search, setSearch] = useState("");
    const [ tags, setTags] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  
    const searchPost = () => {
      if (search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      } else {
        history.push('/');
      }
    };

    const handleKeyPress = (e) => {
      if(e.keyCode === 13) {
        searchPost();
      }
    }
    
    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
        <Container maxWidth="xl">
            <Grid container className={classes.gridContainer} justifyContent="center" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={9}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                       <TextField 
                          name="search"
                          variant="standard"
                          label="Search Blogs"
                          onKeyPress={handleKeyPress}
                          fullWidth
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <ChipInput
                          style={{ margin: '10px 0' }}
                          value={tags}
                          onAdd={(chip) => handleAddChip(chip)}
                          onDelete={(chip) => handleDeleteChip(chip)}
                          label="Search Tags"
                          variant="standard"
                        />
                      <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                    </AppBar>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    {(!searchQuery && !tags.length) && (
                      <Paper className={classes.pagination} elevation={6}>
                        <Pagination page={page} />
                      </Paper>
                    )}
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home