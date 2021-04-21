import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
//import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
//import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  //const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
        <Typography variant="h2" align="center" style={{color: "#"}}>Current Projects</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;