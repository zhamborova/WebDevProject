import React from 'react';
import './settings.css';
import {connect} from "react-redux";
import { delete_user, update_user,} from '../../redux/actions/user-actions';
import Location from "../../components/location/location";


class Settings extends React.Component {

    state = {
        user: {first_name: '',
            last_name: '',
            email: '',
            password: '',
            location: {city:"", country:"", street:"", zip: ""},
            bio: "",
            friends: [],
            image: ""},
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
                            <a href={"#"} onClick={() => this.setState({editing: !this.state.editing})}
                                           className={'display-right edit-color mt-2'}>Edit</a></div>
                        { this.state.editing &&
                                <div className="d-flex flex-column w-100">
                                        <img src={this.state.user.image} className={"default-size"}/>

                                    <div className={'form-group row'}>
                                        <label>First Name</label>
                                        <input className={"form-control"} placeholder={this.state.user.first_name}
                                               onChange={(event) =>
                                                   this.update_user( "first_name", event.target.value)}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Last Name</label>
                                        <input className={"form-control"} placeholder={this.state.user.last_name}
                                               onChange={(event) =>
                                                   this.update_user("last_name", event.target.value)}/>
                                    </div>
                                    <div className={'form-group row w-100 flex-column '}>

                                        <label>Location</label>
                                        <Location location={this.state.user.location}
                                                  setLocation={this.setLocation}
                                                  editing={this.state.editing}/>

                                      </div>
                                    <div className={'form-group row'}>
                                        <label>Bio</label>
                                        <textarea className={"form-control"} placeholder={this.state.user.bio}
                                               onChange={(event) =>
                                                   this.update_user( "bio", event.target.value)}/>
                                    </div>
                                </div>
                        }
                        {
                            !this.state.editing &&
                                <div>
                                    <img src={this.state.user.img} className={"default-size"}/>
                                    <label>Name</label>
                                    <span>{this.state.user.first_name + " " + this.state.user.last_name}</span>

                                    <label>Location</label>
                                    <Location location={this.state.user.location}
                                              setLocation={this.setLocation}
                                              editing={this.state.editing}/>
                                    <label>Bio</label>
                                    <span>{this.state.user.bio}</span>
                                </div>
                        }
                    </div>

                    <div className={"col-4"}>
                        {
                            this.state.editing &&
                                <div>
                                    <div className={"container right-column-container"}>
                                        <label>Email</label>
                                            <input className={"form-control"} placeholder={this.state.user.email}
                                               onChange={(event) =>
                                                    this.update_user("email", event.target.value)}/>
                                    </div>
                                    <div className={"container right-column-container"}>
                                        <label>Password</label>
                                        <input className={"form-control"} placeholder={this.state.user.password}
                                               onChange={(event) => this.update_user("password",
                                                   event.target.value)}/>
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
                                    <button  onClick={() => {
                                        let {editing, ...state} = this.state;
                                        this.setState({editing: false});
                                                             this.props.updateUser(this.state.user)}}
                                             className="btn btn-outline-secondary button-padding display-right">
                                            Done Editing</button>
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
    deleteUser: (user) => delete_user(user, dispatch),
    updateUser: (user) => update_user(user, dispatch),
})

export default connect(stateToPropertyMapper, dispatchMapper)(Settings)


