import React, { useState } from 'react';
import { AppBar, Typography, Dialog, DialogTitle } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Login from '../Form/Login';

function LoginDialogue(props) {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
      onClose(selectedValue);
    };
    
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Login</DialogTitle>
        <Login onClose={handleClose}/>
      </Dialog>
    )
}

const NavBar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <AppBar className={classes.appBar} position="static" style={{backgroundColor: "#f57e42"}}>
            <Toolbar>
                <Typography className={classes.title} variant="h6">CEN3031</Typography>
                <Button className={classes.button}  href="/projects">Projects</Button>
                <Button className={classes.button}  href="/teampairing">Team Pairing</Button>
                <Button className={classes.button}  href="/resources">Resources</Button>
                <Button align="right" className={classes.loginButton} onClick={handleOpen}>Login</Button>
                <LoginDialogue open={open} onClose={handleClose} />
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
