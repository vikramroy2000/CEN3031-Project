import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

import { useDispatch } from 'react-redux';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" style={{backgroundColor: "black"}}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6">CEN3031 Projects</Typography>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" direction="row" alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;