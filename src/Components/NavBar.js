import React, {useState} from 'react'
import clsx from 'clsx';
import Search from '../Components/Search'
import '../css/navbarcss.css'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user_slice'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TemporaryDrawer(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const logoutHandler = () => {
    dispatch(logoutUser(props.history))
  }

  const [state, setState] = useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}>
      <List>
        <ListItem button >
          <ListItemText 
            primary="View Tournaments" 
            onClick={() => props.history.push('/tournaments')}/>
        </ListItem>
        <ListItem button >
          <ListItemText 
            primary="Create Tournament" 
            onClick={() => props.history.push('/tournament-form')}/>
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
    <AppBar position="static" style={{backgroundColor: '#191824'}}>
      <Toolbar>
          <>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer('left', true)} />
          </IconButton>
            
            <Drawer open={state['left']} onClose={toggleDrawer('left', false)}>
              {list()}
            </Drawer>
          </>
          <div id="navbar-btn-wrapper">
            <Typography 
              variant="h6" 
              className="navbar-btn"
              onClick={()=> props.history.push('/home')}>Tournament App
            </Typography>
            <Typography 
              variant="h6" 
              className="navbar-btn"
              onClick={()=>logoutHandler()}>Logout
            </Typography>
          </div>
      </Toolbar>
    </AppBar>
  </div>
  );
};

export default withRouter(TemporaryDrawer);

