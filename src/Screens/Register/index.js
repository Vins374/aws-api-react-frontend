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
            first_name:'',
            last_name:'',
            address:'',
            mobile:'',
            email:'',
            password:'',
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        // console.log(userData);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let payload = { email: this.state.email, password: this.state.password, first_name : this.state.first_name, last_name: this.state.last_name, address: this.state.address, mobile: this.state.mobile };
        console.log(payload);
        let url = "https://hy9jdgi255.execute-api.ap-south-1.amazonaws.com/dev/user";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'operation':'register',
                'Access-Control-Allow-Origin' : '*',
            },
            body: JSON.stringify(payload)
        })
        .then(res =>res.json())
        .then(data => {
            toast(data.message);
            if(data.status == true) {
                this.setState({first_name:'',last_name:'',address:'',mobile:'',email:'',password:''})
            }
        })
        .catch(function() {
            
        });

    }

    gotoLoginScreen() {
        this.props.history.push('/');

        // let userData = localStorage.getItem('userData');
    }

  
    render() {
        return (
            <Fragment>
            <AppHeader name={'Register'}/>
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
                    id="first_name"
                    label="Firstname"
                    name="first_name"
                    onChange={this.onChange} 
                    value={this.state.first_name}
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
                    onChange={this.onChange} 
                    value={this.state.last_name}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    onChange={this.onChange} 
                    value={this.state.address}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="mobile"
                    onChange={this.onChange} 
                    value={this.state.mobile}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    onChange={this.onChange} 
                    value={this.state.email}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    onChange={this.onChange} 
                    value={this.state.password}
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
                        {" Already have account? click here to login "}
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