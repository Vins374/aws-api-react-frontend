import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import classes from './classes';
import {withStyles} from '@material-ui/core';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
        // this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <Fragment>
                Page Not Found
            </Fragment>
        );
    }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(Index);
