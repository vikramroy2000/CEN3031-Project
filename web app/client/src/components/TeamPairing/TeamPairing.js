import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, AppBar, Grid } from '@material-ui/core';
import Groups from './Groups/Groups';
import { getGroups } from '../../actions/groups';
const TeamPairing = () => {
    const [currentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGroups());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth="false">
            <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
                <Typography variant="h2" align="center" style={{color: "#"}}>Current Teams</Typography>
            </AppBar>
            <Grid container justify="space-evenly" alignItems="stretch">
                <Grid item xs={4} sm={7} lg={6}>
                    <Groups />
                </Grid>
            </Grid> 
        </Container>
    )
}
export default TeamPairing;