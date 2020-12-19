import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import './sign-up.css'
import Typography from '@material-ui/core/Typography';
import { withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {create_user} from "../../redux/actions/user-actions";
import {connect} from "react-redux";

const styles = (theme) => ({
    root:{
        backgroundColor:"white",

    },
    image: {
        backgroundImage: 'url(https://cdn.dribbble.com/users/3474264/screenshots/12096178/media/b0e6d4b5c0c65cff9ee0bff500274cbc.jpg?compress=1&resize=1600x1200)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor:  "rgba(143, 143, 143, 0.5)",
    },
    form: {
        width: '100%',

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#3a7347",
        '&:hover': {
            backgroundColor: "#40a657",
        },
    },
});

class SignUp extends React.Component{
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        location: {city:"London", country:"UK", street:"Baker's St 26B", zip: "025021"},
        bio: "Tell something about yourself!",
        friends: [],
        image: "https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg"
    }

    submitCredentials = (user) => {
        if (
            this.state.first_name !== '' &&
            this.state.last_name !== '' &&
            this.state.email !== '' &&
            this.state.password !== '' &&
            /^[a-zA-Z]+$/.test(this.state.first_name) &&
            /^[a-zA-Z]+$/.test(this.state.last_name) &&
            this.state.email.includes("@") &&
            this.state.email.includes(".")) {

            this.props.create_user(user).then(id => {
                this.props.history.push(`/users/${id}`)   } )
        } else {
            window.alert("Please provide valid inputs. First and last names should only contain letters. " +
                "Email should have email attributes. Name, email, and password must not be empty.")
        }



    }
   render(){

       const {classes} = this.props

       return (
        <div className="bg">
        <Container component="main" maxWidth="xs" className={classes.root} color="secondary">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box m={2}/>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                error={this.state.first_name !== '' && !/^[a-zA-Z]+$/.test(this.state.first_name)}
                                autoFocus
                                defaultValue={this.state.first_name}
                                onChange={event => {
                                    const { value } = event.target;
                                    this.setState({ first_name: value });
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                error={this.state.last_name !== '' && !/^[a-zA-Z]+$/.test(this.state.last_name)}
                                defaultValue={this.state.last_name}
                                onChange={event => {
                                    const { value } = event.target;
                                    this.setState({ last_name: value });
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                error={this.state.email !== '' && (!this.state.email.includes("@") || !this.state.email.includes("."))}
                                defaultValue={this.state.email}
                                onChange={event => {
                                    const { value } = event.target;
                                    this.setState({ email: value });
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                defaultValue={this.state.password}
                                onChange={event => {
                                    const { value } = event.target;
                                    this.setState({ password: value });
                                }}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => this.submitCredentials(this.state)}>
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>

                            <Link href="/sign-in" variant="body2">
                                Already have an account? Sign in
                            </Link>
                            <Box mt={2}/>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
        </div>
    );
}

}

const mapDispatchToProps = dispatch => ({
    create_user: (user) => create_user(dispatch, user)
})

export default withStyles(styles)(connect(()=>({}), mapDispatchToProps)(SignUp));
