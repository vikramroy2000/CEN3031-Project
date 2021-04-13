import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
const Resources = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
                <Typography variant="h2" align="center" style={{color: "#"}}>Resources</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container align="center" justify="space-evenly" spacing={3}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <a href="http://google.com" justify="space-evenly">Google is a website</a>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default Resources;