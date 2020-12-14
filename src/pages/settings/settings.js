import React from 'react';
import './settings.css';
import {connect} from "react-redux";
import { delete_user, update_user,} from '../../redux/actions/user-actions';
import Location from "../../components/location/location";
import {Link} from "react-router-dom";

import TextField from '@material-ui/core/TextField';


class Settings extends React.Component {

    state = {
        user: {first_name: '',
            last_name: '',
            email: '',
            password: '',
            location: {city:"", country:"", street:"", zip: ""},
            bio: "",
            friends: [],
            image: "",
        id: ""},
        editing: false
    }

    componentDidMount() {
        let {user} = this.props
        this.setState({user: {...user}})
    }

    update_user = (field, value) => {
        let newUser = this.state.user;
        newUser[field] = value;
        this.setState({user:newUser})
    }
    setLocation = (location ) => {
        this.update_user("location",location)
    }
    render() {
        return (
            <div className="body">
                <div className="row">
                    <div className="container profile-container col-5 ">
                        <div className="d-flex justify-content-between">
                            <h3>Settings</h3>
                            {
                                !this.state.editing ?
                                <button className="btn btn-outline-secondary button-padding display-right edit-color mt-2" onClick={() => this.setState({editing: !this.state.editing})}>
                                    Edit
                                </button> : null
                            }

                        </div>
                        { this.state.editing &&
                                <div className="d-flex flex-column w-100">
                                        <TextField
                                            label="Avatar URL"
                                            defaultValue={this.state.user.image}
                                            variant="outlined"
                                            margin={"normal"}
                                            onChange={(event) => this.update_user("image", event.target.value)}
                                        />
                                    <img src={this.state.user.image} className="settings-image"/>


                                    <TextField
                                        label="First Name"
                                        defaultValue={this.state.user.first_name}
                                        variant="outlined"
                                        margin={"normal"}
                                        onChange={(event) => this.update_user("first_name", event.target.value)}
                                    />

                                    <TextField
                                        label="Last Name"
                                        defaultValue={this.state.user.last_name}
                                        variant="outlined"
                                        margin={"normal"}
                                        onChange={(event) => this.update_user("last_name", event.target.value)}
                                    />
                                    <div className={'form-group row w-100 flex-column '}>

                                        <label>Address</label>
                                        <Location location={this.state.user.location}
                                                  setLocation={this.setLocation}
                                                  editing={this.state.editing}/>

                                      </div>

                                    <TextField
                                        label="Bio"
                                        defaultValue={this.state.user.bio}
                                        variant="outlined"
                                        margin={"normal"}
                                        onChange={(event) => this.update_user("bio", event.target.value)}
                                    />
                                </div>
                        }
                        {
                            !this.state.editing &&
                                <div className="d-flex flex-column">
                                    {this.state.user.image !== '' &&
                                    <img src={this.state.user.image} className="settings-image"/>
                                    }

                                    <p>{this.state.user.first_name + " " + this.state.user.last_name}</p>

                                    <label className="mb-0">Address</label>
                                    <Location location={this.state.user.location}
                                              setLocation={this.setLocation}
                                              editing={this.state.editing}/>
                                    <label className="mb-0">Bio</label>
                                    <span>{this.state.user.bio}</span>
                                </div>
                        }
                    </div>

                    <div className={"col-4"}>
                        {
                            this.state.editing &&
                                <div>
                                    <div className={"container right-column-container"}>

                                        <TextField
                                            label="Email"
                                            defaultValue={this.state.user.email}
                                            variant="outlined"
                                            margin={"normal"}
                                            onChange={(event) => this.update_user("email", event.target.value)}
                                        />
                                    </div>
                                    <div className={"container right-column-container"}>
                                        <TextField
                                            label="Password"
                                            defaultValue={this.state.user.password}
                                            variant="outlined"
                                            margin={"normal"}
                                            onChange={(event) => this.update_user("password", event.target.value)}
                                        />
                                    </div>
                                </div>
                        }
                        {
                            !this.state.editing &&
                                <>
                                    <div className={"container right-column-container"}>
                                        <label>Email</label>
                                        <span>
                                            {this.state.user.email}
                                        </span>
                                    </div>
                                    <div className={'container right-column-container'}>
                                        <label>Password</label>
                                        <span>
                                            ••••••••••••
                                        </span>
                                    </div>
                                </>
                        }

                        {
                            this.state.editing &&
                            <>
                            <Link to={"/"} onClick={() => {
                                this.props.deleteUser(this.state.user.id)}}
                                     className="btn btn-outline-secondary button-padding display-right">
                                Delete Account</Link>
                                    <button  onClick={() => {

                                        if ((this.state.user.first_name !== '' &&
                                            this.state.user.last_name !== '' ) &&
                                            this.state.user.email !== '' &&
                                            this.state.user.password !== '' &&
                                            this.state.user.email.includes("@") &&
                                            this.state.user.email.includes(".") &&
                                            /^[a-zA-Z]+$/.test(this.state.user.first_name) &&
                                            /^[a-zA-Z]+$/.test(this.state.user.last_name)) {
                                            if (this.state.user.image === '') {
                                                this.update_user( "image", "https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg")
                                            }

                                            this.setState({editing: false});
                                            this.props.updateUser(this.state.user)

                                        } else {
                                            window.alert("Please provide valid inputs. First and last names should only contain letters. " +
                                                "Email should have email attributes. Name, email, and password must not be empty.")
                                        }

                                    }
                                    } className="btn btn-outline-secondary button-padding display-right">
                                            Done Editing</button>
                            </>
                        }

                    </div>
                </div>
            </div>
        )
    }



}

const stateToPropertyMapper = (state) => {
    return {user: state.users.current_user}
}


const dispatchMapper = (dispatch) => ({
    deleteUser: (id) => delete_user(id, dispatch),
    updateUser: (user) => update_user(user, dispatch),
})

export default connect(stateToPropertyMapper, dispatchMapper)(Settings)


