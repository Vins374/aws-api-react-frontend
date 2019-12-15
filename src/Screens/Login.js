import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <Fragment>
                Login Page
            </Fragment>
        );
    }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(Login);
