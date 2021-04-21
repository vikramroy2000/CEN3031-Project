// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { InputAdornment, IconButton } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Container, Grow, TextField, Button, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import { signup } from '../../actions/auth';
const initialState = { user: '', pass: '' };

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Admin = () => {
    const admin = JSON.parse(localStorage.getItem('profile'));
    const [formData, setFormData] = useState(initialState);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(formData, history))
        setOpen(true);
        clear();
    }
    const handleClose = () => {
        setOpen(false);
    }
    const clear = () => {
        setFormData({user: '', pass: ''});
    }
    return (
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    {admin?.result?.user === 'admin' && (<Paper className={classes.paper}>
                        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                            <Typography styles={{marginRight: "auto"}}variant="h6">Register a user.</Typography>
                            <TextField required name="username" variant="outlined" label="Username" fullWidth value={formData.user} onChange={(e) => setFormData({ ...formData, user: e.target.value })}/>
                            <TextField required name="password" variant="outlined" label="Password" fullWidth value={formData.pass} onChange={(e) => setFormData({ ...formData, pass: e.target.value })}/>
                            <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Register</Button>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success">
                                    Success!
                                </Alert>
                            </Snackbar>
                        </form>
                    </Paper>)}
                </Container>
            </Grow>
        </Container>
    )
}
export default Admin;