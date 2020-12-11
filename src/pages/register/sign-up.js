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
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
let grey ="rgba(143, 143, 143, 0.5)"



const styles = (theme) => ({
    root:{
        '& label.Mui-focused': {
            color: grey,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: grey,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: grey,
            },
            '&:hover fieldset': {
                borderColor: grey,
            },
            '&.Mui-focused fieldset': {
                borderColor: grey,
            },
        },
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
        marginTop: theme.spacing(4),
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
    const {classes} = this.props

   render(){ return (
        <div className="bg">
        <Container component="main" maxWidth="xs" className={classes.root}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
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
                                autoFocus

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
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>

                            <Link href="/login" variant="body2">
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
export default withStyles(styles)(SignUp)
