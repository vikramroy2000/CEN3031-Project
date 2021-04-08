import { Container, Typography, TextField, Grid, Grow, AppBar, Card, CardContent, FormControl, FormControlLabel, RadioGroup, Radio, FormGroup, Checkbox } from '@material-ui/core';

const Survey = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
                <Typography variant="h2" align="center" style={{color: "#"}}>CEN 3031 Pairing Survey</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container align="center" justify="space-evenly" alignItems="column" spacing={3}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                <div>
                                    <CardContent>
                                        <Typography style={{float: "left"}} component="h6" variant="h6">First Name</Typography>
                                        <TextField style={{float: "left", margin: "0px 0 10px"}} id="standard-basic" label="Input" fullWidth/>
                                    </CardContent>
                                </div>
                            </Card>
                            <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                <div>
                                    <CardContent>
                                        <Typography style={{float: "left"}} component="h6" variant="h6">Last Name</Typography>
                                        <TextField style={{float: "left", margin: "0px 0 10px"}} id="standard-basic" label="Input" fullWidth/>
                                    </CardContent>
                                </div>
                            </Card>
                            <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                <div>
                                    <CardContent align="left">
                                        <FormControl>
                                            <Typography component="h6" variant="h6">Current Year</Typography>
                                            <RadioGroup >
                                                <FormControlLabel value="1st" control={<Radio />} label="Freshman"/>
                                                <FormControlLabel value="2nd" control={<Radio />} label="Sophomore"/>
                                                <FormControlLabel value="3rd" control={<Radio />} label="Junior"/>
                                                <FormControlLabel value="4th" control={<Radio />} label="Senior or higher"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </CardContent>
                                </div>
                            </Card>
                            <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                <div>
                                    <CardContent align="left">
                                        <FormControl>
                                            <Typography component="h6" variant="h6">What am I looking to create? (Select one or more)</Typography>
                                            <RadioGroup >
                                                <FormControlLabel value="webapp" control={<Checkbox />} label="Web application"/>
                                                <FormControlLabel value="game" control={<Checkbox />} label="Game"/>
                                                <FormControlLabel value="other" control={<Checkbox />} label="Other"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </CardContent>
                                </div>
                            </Card>
                            <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                <div>
                                    <CardContent align="left">
                                        <FormControl>
                                            <Typography component="h6" variant="h6">Programming Experience</Typography>
                                            <FormGroup >
                                                <FormControlLabel value="novice" control={<Radio />} label="Novice (Completed programming courses)"/>
                                                <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate (Worked on large projects that take days to complete)"/>
                                                <FormControlLabel value="advanced" control={<Radio />} label="Advanced (Worked on projects that take weeks to complete)"/>
                                            </FormGroup>
                                        </FormControl>
                                    </CardContent>
                                </div>
                            </Card>
                            <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                <div>
                                    <CardContent align="left">
                                        <FormControl>
                                            <Typography component="h6" variant="h6">Internship/Research/Industry Experience</Typography>
                                            <RadioGroup >
                                                <FormControlLabel value="none" control={<Radio />} label="None"/>
                                                <FormControlLabel value="1+" control={<Radio />} label="One or more semesters"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </CardContent>
                                </div>
                            </Card>
                            <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                <div>
                                    <CardContent align="left">
                                        <FormControl>
                                            <Typography component="h6" variant="h6">Personality Type</Typography>
                                            <RadioGroup >
                                                <FormControlLabel value="introvert" control={<Radio />} label="Introvert"/>
                                                <FormControlLabel value="extrovert" control={<Radio />} label="Extrovert"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    )
}

export default Survey;