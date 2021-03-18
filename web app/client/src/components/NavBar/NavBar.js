import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" style={{backgroundColor: "#FA4616"}}>
            <Toolbar>
                <Typography className={classes.title} variant="h6">CEN3031 Projects</Typography>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
