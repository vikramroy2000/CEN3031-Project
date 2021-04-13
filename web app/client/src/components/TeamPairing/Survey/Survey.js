import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Grow, AppBar, Card, CardContent, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';
// import { FormGroup, Checkbox } from '@material/ui-core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createStudent } from '../../../actions/survey';
const Survey = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ first: '', last: '', year: '', product: '', progExp: '', IntResIndExp: '', personality: '' });
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createStudent(formData));
    }
    
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" style={{margin: "-10px 0 10px 0", borderRadius: 5}}>
                <Typography variant="h2" align="center" style={{color: "#"}}>CEN 3031 Pairing Survey</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container align="center" justify="space-evenly" spacing={3}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <form autoComplete="off" noValidate onSubmit={handleSubmit} > 
                                <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                    <div>
                                        <CardContent>
                                            <Typography style={{float: "left"}} component="h6" variant="h6">First Name</Typography>
                                            <TextField required style={{float: "left", margin: "0px 0 10px"}} id="standard-basic" label="Input" fullWidth value={formData.first} onChange={(e) => setFormData({...formData, first: e.target.value })}/>
                                        </CardContent>
                                    </div>
                                </Card>
                                <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                    <div>
                                        <CardContent>
                                            <Typography style={{float: "left"}} component="h6" variant="h6">Last Name</Typography>
                                            <TextField required style={{float: "left", margin: "0px 0 10px"}} id="standard-basic" label="Input" fullWidth value={formData.last} onChange={(e) => setFormData({...formData, last: e.target.value })}/>
                                        </CardContent>
                                    </div>
                                </Card>
                                <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                    <div>
                                        <CardContent align="left">
                                            <FormControl>
                                                <Typography component="h6" >Current Year</Typography>
                                                <RadioGroup value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value })}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Freshman"/>
                                                    <FormControlLabel value="2" control={<Radio />} label="Sophomore"/>
                                                    <FormControlLabel value="3" control={<Radio />} label="Junior"/>
                                                    <FormControlLabel value="4" control={<Radio />} label="Senior or higher"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </CardContent>
                                    </div>
                                </Card>
                                <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                    <div>
                                        <CardContent align="left">
                                            <FormControl>
                                                <Typography component="h6" >What am I looking to create? (Select one or more)</Typography>
                                                <RadioGroup value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value })}>
                                                    <FormControlLabel value="webapp" control={<Radio />} label="Web application"/>
                                                    <FormControlLabel value="game" control={<Radio />} label="Game"/>
                                                    <FormControlLabel value="other" control={<Radio />} label="Other"/>
                                                    {/* Change to check box if possible, adjust setFormData to append and remove from array */}
                                                </RadioGroup>
                                            </FormControl>
                                        </CardContent>
                                    </div>
                                </Card>
                                <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                    <div>
                                        <CardContent align="left">
                                            <FormControl>
                                                <Typography component="h6" >Programming Experience</Typography>
                                                <RadioGroup value={formData.progExp} onChange={(e) => setFormData({...formData, progExp: e.target.value })}>
                                                    <FormControlLabel value="novice" control={<Radio />} label="Novice (Completed programming courses)"/>
                                                    <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate (Worked on large projects that take days to complete)"/>
                                                    <FormControlLabel value="advanced" control={<Radio />} label="Advanced (Worked on projects that take weeks to complete)"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </CardContent>
                                    </div>
                                </Card>
                                <Card style={{height: "auto", width: "auto", margin: "10px 0 10px"}}>
                                    <div>
                                        <CardContent align="left">
                                            <FormControl>
                                                <Typography component="h6" >Internship/Research/Industry Experience</Typography>
                                                <RadioGroup value={formData.IntResIndExp} onChange={(e) => setFormData({...formData, IntResIndExp: e.target.value })}>
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
                                                <Typography component="h6" >Personality Type</Typography>
                                                <RadioGroup value={formData.personality} onChange={(e) => setFormData({...formData, personality: e.target.value })}>
                                                    <FormControlLabel value="introvert" control={<Radio />} label="Introvert"/>
                                                    <FormControlLabel value="extrovert" control={<Radio />} label="Extrovert"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </CardContent>
                                    </div>
                                </Card>
                                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth >Submit</Button>
                            </form>
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    )
}

export default Survey;