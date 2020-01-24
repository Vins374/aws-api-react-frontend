import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import classes from './classes';
import {withStyles} from '@material-ui/core';

import AppHeader from './../../Components/AppHeader';

class Index extends Component {

    gotoLoginScreen() {
        this.props.history.push('/');
    }

  
    render() {
        return (
            <Fragment>
            <AppHeader name="Register"/>
            <Container component="main" maxWidth="xs">

            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="first_name"
                    label="Firstname"
                    name="first_name"
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="last_name"
                    label="Lastname"
                    name="last_name"
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="mobile"
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Submit
                </Button>
                <Grid container>
                    {/* <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid> */}
                    <Grid item>
                    <Link onClick={ () => { this.gotoLoginScreen() }} variant="body2">
                        {"Already have account? click here to login"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            
            </Container>
            </Fragment>
        );
    }
}

export default withStyles(classes)(Index);