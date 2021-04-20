import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { AppBar, Typography, Menu, MenuItem } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import useStyles from './styles';


// function LoginDialogue(props) {
//     const { onClose, selectedValue, open } = props;
//     const handleClose = () => {
//       onClose(selectedValue);
//     };
    
  
//     return (
//       <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//         <DialogTitle id="simple-dialog-title">Login</DialogTitle>
//         <Login onClose={handleClose}/>
//       </Dialog>
//     )
// }

const NavBar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    //console.log(user);
    const logout = () => {
        
        dispatch({ type: 'LOGOUT' });
        history.push('/auth');
        setUser(null);
    }

    useEffect((user, logout) => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // }
    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <AppBar className={classes.appBar} position="static" style={{backgroundColor: "#f57e42"}}>
            <Toolbar>
                <Typography className={classes.title} variant="h6">CEN3031</Typography>
                <Button className={classes.button}  href="/projects">Projects</Button>
                <Button className={classes.button}  href="/teampairing">Team Pairing</Button>
                <Button className={classes.button}  href="/resources">Resources</Button>
                {user?.result?.user === 'admin' && <Button className={classes.button}  href="/admin">Register Users</Button>}
                {!user?.result ? <Button align="right" className={classes.loginButton} href="/auth">Login</Button>
                : <Button align="right" className={classes.loginButton} onClick={logout}>Logout</Button>}
                
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
