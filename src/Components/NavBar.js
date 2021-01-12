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
  fullList: {
    width: 'auto',
    
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

  const logoutHandler = () => {
    dispatch(logoutUser(props.history))
  }

  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button >
            <ListItemText primary="Logout" onClick={() => dispatch(logoutUser())}/>
          </ListItem>
          <ListItem button >
            <ListItemText primary="View Tournaments" onClick={() => props.history.push('/home/tournaments')}/>
          </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
          <>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer('left', true)} />
          </IconButton>
            
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
          </>
        <Typography variant="h6" className={classes.title}>
          Tournament
        </Typography>
        <Button color="inherit" onClick={logoutHandler} >logout</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
};

export default withRouter(TemporaryDrawer);

// function NavBar(props){


  // return(
  //   <div id="nav-container">
  //     <div id="nav-left">
  //       <p>App Icon</p>

  //       <p>App Name</p>
  //     </div>
  //     <div id="nav-center">
  //       <Search />
  //     </div>
  //     <div id="nav-right">
  //       <select value="Drop down of Options">
  //         <option>View Tournaments</option>
  //         <option
  //           onSelect={() => props.history.push('/tournament-form')}
  //         >Create Tournament</option>
  //         <option>View Profile</option>
  //       </select>
  //       <button>Log Out</button>
  //     </div>
  //   </div>
  // )
// }
// export default withRouter(NavBar);