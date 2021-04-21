import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Container, Grow, TextField, Button, Paper, Typography, InputAdornment, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import { signin } from '../../actions/auth';
const initialState = { user: '', pass: '' };

const Auth = () => {
    const [showPass, setShowPass] = useState(true);
    const [formData, setFormData] = useState(initialState);
    const handleShowPass = () => setShowPass((prev) => !prev);
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData, history))
    }
    return (
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    <Paper className={classes.paper}>
                        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                            <Typography styles={{marginRight: "auto"}}variant="h6">Login with your given username and password.</Typography>
                            <TextField required name="username" variant="outlined" label="Username" fullWidth value={formData.user} onChange={(e) => setFormData({ ...formData, user: e.target.value })}/>
                            <TextField required type={showPass ? "password" : "text"} name="password" variant="outlined" label="Password" 
                            InputProps={{endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPass}>
                                        {!showPass ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>)}}
                            fullWidth value={formData.pass} onChange={(e) => setFormData({ ...formData, pass: e.target.value })}/>
                            <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Log in</Button>
                        </form>
                    </Paper>
                </Container>
            </Grow>
        </Container>
    )
}
export default Auth;