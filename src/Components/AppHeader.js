import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const classes = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
});


function AppHeader() {
  return (
    <div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
            Login
        </Typography>
        </Toolbar>
    </AppBar>
    </div>
  );
}
export default AppHeader;