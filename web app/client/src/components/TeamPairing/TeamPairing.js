import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, AppBar, Grid, Grow, Button } from '@material-ui/core';
import Groups from './Groups/Groups';
import { getGroups } from '../../actions/groups';
const TeamPairing = () => {
    const [currentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGroups());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
                <Typography variant="h2" align="center" style={{color: "#"}}>Current Teams</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container align="center" justify="space-evenly" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} lg={12}>
                            <Groups />
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
            <AppBar position="static" color="inherit" style={{margin: "15px 0 10px 0", borderRadius: 5}}>
                <Typography variant="h2" align="center" style={{color: "#", margin: "10px"}}>Take Survey</Typography>
                <Typography variant="body1" align="center" style={{margin: "-10px 0 5px"}}>Take the survey to be automatically placed in the best fit team!</Typography>
                <div align="center" style={{margin: "10px"}}>
                    <Button variant="contained" style={{backgroundColor: "#f57e42"}} href="/teampairing/survey">Get Started</Button>
                </div>
            </AppBar>
        </Container>
    )
}
export default TeamPairing;