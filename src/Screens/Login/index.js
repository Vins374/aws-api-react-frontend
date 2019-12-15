import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import classes from './classes';
import {withStyles} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import AppHeader from './../../Components/AppHeader';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
        // this.onChange = this.onChange.bind(this);
    }

    gotoRegisterScreen() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <Fragment>
                    <AppHeader/>

                    <Card className={classes.card}>
                        <CardContent>
                            
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField className={classes.textInput} id="standard-basic" label="Username" />

                            <TextField className={classes.textInput} id="standard-basic" label="Password" />

                            <Button variant="contained" color="primary" onClick={ () => { this.gotoRegisterScreen() }}> Login </Button>
                        </form>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={ () => { this.gotoRegisterScreen() }}> Goto Register Screen </Button>
                        </CardActions>
                    </Card>
            </Fragment>
        );
    }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(Index);
