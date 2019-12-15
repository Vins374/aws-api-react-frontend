import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import classes from './classes';
import {withStyles} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

    gotoLoginScreen() {
        this.props.history.push('/');
    }

    render() {
        return (
            <Fragment>
                    <AppHeader/>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Register
                            </Typography>
                            <Typography variant="h5" component="h2">
                            be
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            adjective
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={ () => { this.gotoLoginScreen() }}> Goto Register Screen </Button>
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
