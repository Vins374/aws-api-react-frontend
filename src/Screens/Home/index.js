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

        let userData = localStorage.getItem('userData');
        userData = JSON.parse(userData);


        this.state = {
            id: userData.id,
            first_name:userData.first_name,
            last_name:userData.last_name,
            address:userData.address,
            mobile:userData.mobile,
            picture_url:userData.picture_url,
            picture_path: userData.picture_url,
            userData: userData
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.getParseImage = this.getParsedImage.bind(this);

        console.log(userData);

        if(userData.picture_url != null && userData.picture_url != '') {
            this.getParseImage(userData.picture_url);
        }
        
        // console.log(userData);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let payload = { picture_url: this.state.picture_path,id: this.state.id, first_name : this.state.first_name, last_name: this.state.last_name, address: this.state.address, mobile: this.state.mobile };
        console.log(payload);
        let url = "https://hy9jdgi255.execute-api.ap-south-1.amazonaws.com/dev/user";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'operation':'update',
                'Access-Control-Allow-Origin' : '*',
            },
            body: JSON.stringify(payload)
        })
        .then(res =>res.json())
        .then(data => {
            toast(data.message);
            console.log(data);

            // if(payload.picture_url != '') {
                let updateUserData = this.state.userData;
                updateUserData.picture_url = this.state.picture_path;
                updateUserData.first_name = this.state.first_name;
                updateUserData.last_name = this.state.last_name;
                updateUserData.address = this.state.address;
                updateUserData.mobile = this.state.mobile;
                localStorage.setItem('userData',JSON.stringify(updateUserData));
            // }

            
        })
        .catch(function() {
            
        });

    }

    getParsedImage(imagePath)
    {
        let url = "https://6l9yk6hl78.execute-api.ap-south-1.amazonaws.com/dev/image-upload?name="+imagePath;
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        .then(res =>res.json())
        .then(data => {
            this.setState({picture_url:data.signedUrl,picture_path:imagePath});
            console.log(data);
        })
        .catch(function() {
            
        });
    }

    fileChangedHandler(e) {
        let file = e.target.files[0];
        // console.log(file);
        // this.setState({ profile_image: e.target.files[0] });

        var payload = new FormData();

        payload.append("file",e.target.files[0]);
        let url = "https://6l9yk6hl78.execute-api.ap-south-1.amazonaws.com/dev/image-upload";
        fetch(url, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            },
            body: payload
        })
        .then(res =>res.json())
        .then(data => {
            this.setState({picture_url:data.signedUrl,picture_path:data.filePath});
            console.log(data);
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
            <AppHeader name={'Welcome Home - '+this.state.first_name}/>
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


                <img src={ this.state.picture_url } style={{width:"50%"}} />

                <input type="file" name="profile_image" onChange={this.fileChangedHandler} />
                
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
                        {" Logout "}
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