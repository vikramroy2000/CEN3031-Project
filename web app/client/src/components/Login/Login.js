import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import dotenv from 'dotenv';
dotenv.config();
const Login = ({ onClose }) => {
    
    const [credentials, setCredentials] = useState({user: '', pass: ''})
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.user === "chris") {
            if (credentials.pass === "1234") {
                console.log("someone else implement this");
                onClose();
            }
        }
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography styles={{marginRight: "auto"}}variant="h6">Login with your Canvas username and password.</Typography>
                <TextField required name="username" variant="outlined" label="Username" fullWidth value={credentials.user} onChange={(e) => setCredentials({ ...credentials, user: e.target.value })}/>
                <TextField required name="password" variant="outlined" label="Password" fullWidth value={credentials.pass} onChange={(e) => setCredentials({ ...credentials, pass: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Log in</Button>
            </form>
        </Paper>
    )
}
export default Login;