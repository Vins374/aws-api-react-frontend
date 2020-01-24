import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';

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

class AppHeader extends Component {
  constructor(props) {
    super(props);

    let name = this.props.name ? this.props.name : 'App';

    this.state = {
      name: name,
  };
    
    console.log(this.props.name);
  }

  render() {

    return (
      <div className={classes.root}>
      <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
              {this.state.name}
          </Typography>
          </Toolbar>
      </AppBar>
      </div>
    )
  };

}

export default withStyles(classes)(AppHeader);