import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, Typography, Dialog, DialogTitle, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
//import NavBar from './components/NavBar/NavBar';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
//import useStyles from './styles';

function SubmitProjects(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title"></DialogTitle>
      <Form onClose={handleClose}/>
    </Dialog>
  )
}

const Projects = () => {
  
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  //const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
        <Typography variant="h2" align="center" style={{color: "#"}}>Current Projects</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen} style={{borderRadius: "0 0 5px 5px"}}>Submit a Project</Button>
        <SubmitProjects open={open} onClose={handleClose} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12} lg={12}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Projects;