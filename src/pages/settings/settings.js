import React from 'react';
import './settings.css';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import InputBox from "../../components/input-box/input-box";
import {create_user, delete_user, update_user, get_user} from '../../redux/actions/user-actions';
import {
    fetchAllUsers,
    fetchUserById,
    updateUser,
    deleteUser,
    createUser
} from '../../services/UserService'
import img4 from "../../assets/Ellipse 4.png";
import {NavBar} from "../../components/navbar/navbar";

class Settings extends React.Component {

    state = {
        user: { id:123, first_name: "Michelle", last_name: "Steel",  img: img4,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
                "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit i" +
                "n voluptate velit esse cillum dolore eu fugiat nulla.",
            location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
            friends: [345, 234, 456,567,678],
            events: [1,2,3,4,5],
            email: "efe@gmail.com"},
        // temporary
        editing: false
    }

    componentDidMount() {
        let {current_user} = this.props
        console.log(this.props)
        console.log(current_user)
        if (current_user !== undefined) {
        this.setState({user: current_user})
        }
    }


    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const userId = this.props.match.params.userId
    //     const previousUserId = prevProps.match.params.userId
    //     if (userId !== previousUserId) {
    //         this.props.getUser(userId)
    //     }
    // }

    render() {
        return (
            <div className={"body"}>
                <div className={"row"}>
                    <NavBar/>
                    <div className={"container profile-container col-4"}>
                        <h3>Settings</h3>
                        {
                            this.state.editing &&
                                <div>
                                    <p className={"align-center"}>
                                        <img src={this.state.user.img} className={"default-size"}/>
                                    </p>
                                    <div className={'form-group row'}>
                                        <label>First Name</label>
                                        <input className={"form-control"} placeholder={this.state.user.first_name}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, first_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Last Name</label>
                                        <input className={"form-control"} placeholder={this.state.user.last_name}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, last_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Location</label>
                                        <input className={"form-control"} placeholder={this.state.user.location.street +
                                        " " + this.state.user.location.city + " " +
                                        this.state.user.location.country + " " +
                                        this.state.user.location.country}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, location: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Bio</label>
                                        <input className={"form-control"} placeholder={this.state.user.bio}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, bio: event.target.value})}/>
                                    </div>
                                </div>
                        }
                        {
                            !this.state.editing &&
                                <div>
                                    <p className={"align-center"}>
                                    <img src={this.state.user.img} className={"default-size"}/>
                                    </p>
                                    <label>Name</label>
                                    <span>
                                        {this.state.user.first_name + " " + this.state.user.last_name}
                                        <a href={"#"} onClick={() => this.setState({editing: true})} className={'display-right edit-color'}>Edit</a>
                                    </span>
                                    <label>Location</label>
                                    <span>
                                        {this.state.user.location.city}
                                        <a href={"#"} onClick={() => this.setState({editing: true})} className={'display-right edit-color'}>Edit</a>
                                    </span>
                                    <label>Bio</label>
                                    <span>{this.state.user.bio}</span>
                                    <a href={"#"} onClick={() => this.setState({editing: true})} className={'display-right edit-color'}>Edit</a>
                                </div>
                        }
                    </div>

                    <div className={"col-4"}>
                        {
                            this.state.editing &&
                                <div>
                                    <div className={"container right-column-container"}>
                                    <div className={'form-group row'}>
                                        <label>Email</label>
                                            <input className={"form-control"} placeholder={this.state.user.email}
                                               onChange={(event) =>
                                                    updateUser({...this.state.user, email: event.target.value})}/>

                                    </div>
                                    </div>
                                    <div className={"container right-column-container"}>
                                    <div className={'form-group row'}>
                                        <label>Password</label>
                                        <input className={"form-control"} placeholder={this.state.user.password}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, password: event.target.value})}/>
                                    </div>
                                    </div>
                                </div>
                        }
                        {
                            !this.state.editing &&
                                <div>
                                    <div className={"container right-column-container"}>
                                        <label>Email</label>
                                        <span>
                                            {this.state.user.email}
                                            <a href={"#"} onClick={() => this.setState({editing: true})} className={'display-right'}>Edit</a>
                                        </span>
                                    </div>
                                    <div className={'container right-column-container'}>
                                        <label>Password</label>
                                        <span>
                                            ••••••••••••
                                            <a href={"#"} onClick={() => this.setState({editing: true})} className={'display-right'}>Edit</a>
                                        </span>
                                    </div>
                                </div>
                        }

                        <span>
                            <div className={"container right-column-container"}>FAQ
                            <FontAwesomeIcon className={"mt-1 display-right"} icon={faLongArrowAltRight}/>
                            </div>
                        </span>
                        <span>
                            <div className={"container right-column-container"}>Report a problem
                            <FontAwesomeIcon className={"mt-1 display-right"} icon={faLongArrowAltRight}/>
                            </div>
                        </span>
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
    createUser: (user) => create_user(user, dispatch),
    deleteUser: (user) => delete_user(user, dispatch),
    updateUser: (user) => update_user(user, dispatch),
    // getUser: (userId) => get_user(userId, dispatch)
})

export default connect
(stateToPropertyMapper, dispatchMapper)
(Settings)

// export default Settings;
