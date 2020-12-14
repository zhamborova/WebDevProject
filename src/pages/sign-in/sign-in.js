import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {login} from "../../services/user-service";
import {setCurrentUser} from "../../redux/actions/user-actions";
import {connect} from "react-redux";


let grey ="rgba(143, 143, 143, 0.5)"

const styles = (theme) => ({
    root: {
        height: '100vh',
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
    },

    image: {
        backgroundImage: 'url(https://cdn.dribbble.com/users/1803663/screenshots/11631282/media/7b4f4da61af27478571fea62aaba7060.jpg?compress=1&resize=1600x1200)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "rgba(143, 143, 143, 0.5)",
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#3a7347",
        '&:hover': {
            backgroundColor: "#40a657",
        },
    },


});





class SignInSide extends React.Component{
    state = {
        email: '',
        password: '',
    }

    update= (field, event) => this.setState({[field]: event.target.value})

    submitCredentials = (user) => {
        if (this.state.email !== ''
            && this.state.password !== ''
            && this.state.email.includes("@")
            && this.state.email.includes(".")) {
            login(user).then(response => {
                if(!response.hasOwnProperty("message")) {
                    let user = response
                    this.props.setCurrentUser(user)
                    this.props.history.push(`/users/${user.id}`)

                }else {
                    window.alert("Login or password are incorrect :(")
                }
            })
        } else {
            window.alert("Please provide valid inputs. First and last names should only contain letters. " +
                "Email should have email attributes. Name, email, and password must not be empty.")
        }


    }

render(){
  const {classes} = this.props;
    return (<Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            defaultValue={this.state.email}
                            type="email"
                            error={!this.state.email.includes("@") || !this.state.email.includes(".")}
                            onChange={event => {
                                const { value } = event.target;
                                this.setState({ email: value });
                            }}
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
                            defaultValue={this.state.password}
                            onChange={event => {
                                const { value } = event.target;
                                this.setState({ password: value });
                            }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => this.submitCredentials(this.state)}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
  }
}

const propertyToDispatchMapper = dispatch => ({
    setCurrentUser: (current_user) => setCurrentUser(dispatch, current_user)
})

export default withStyles(styles)(connect(()=>({}), propertyToDispatchMapper)(SignInSide))
