import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import classes from './classes';
import {withStyles} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppHeader from './../../Components/AppHeader';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    gotoRegisterScreen() {
        this.props.history.push('/register');
    }

    handleSubmit(event) {
        event.preventDefault();


        if(this.state.email == '' || this.state.password == ''){
            toast("Please enter the details");
            return false;
        }

        console.log("submit");
        console.log(this.state);
        let payload = { email : this.state.email, password: this.state.password };
        console.log(payload);
        let url = "https://hy9jdgi255.execute-api.ap-south-1.amazonaws.com/dev/user";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'operation':'login',
                'Access-Control-Allow-Origin' : '*',
            },
            body: JSON.stringify(payload)
        })
        .then(res =>res.json())
        .then(data => {
            toast(data.message);
            console.log(data);
            if(data.status == true) {
                localStorage.setItem("userData",JSON.stringify(data.data[0]));
                this.props.history.push('/home');
            }
                

        })
        .catch(function() {
            
        });
    }

  
    render() {
        return (
            <Fragment>
            <AppHeader name="Login"/>
            <Container component="main" maxWidth="xs">

            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />

            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.onChange} 
                    value={this.state.email}
                    autoFocus
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
                    onChange={this.onChange} 
                    value={this.state.password}
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
                    <Link onClick={ () => { this.gotoRegisterScreen() }} variant="body2">
                        {"Don't have an account? Sign Up"}
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