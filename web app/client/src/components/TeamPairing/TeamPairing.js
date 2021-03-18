import React from 'react';

import { Container, Grow, Grid } from '@material-ui/core';
import Groups from './Groups/Groups';
const TeamPairing = () => {
    return (
        <Container>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Groups></Groups>
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    )
}
export default TeamPairing;