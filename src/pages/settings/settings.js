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

const user = { id:123, first_name: "Michelle", last_name: "Steel",  img: img4,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q" +
        "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit i" +
        "n voluptate velit esse cillum dolore eu fugiat nulla.",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    friends: [345, 234, 456,567,678],
    events: [1,2,3,4,5],
    email: "efe@gmail.com"}

class Settings extends React.Component {

    state = {
        user: this.props.user,
        editing: false
    }

    // updateUser = (event) => {
    //     const updatedUser = this.event.value
    //     updatedUser(updatedUser)
    //         .then(actualUser => this.setState({
    //             user: updatedUser
    //         }))
    // }

    componentDidMount() {
        console.log('THIS USER')

        console.log(this.state.user)
        const userId = this.props.match.params.userId
        this.setState({
            user: this.props.getUser(userId)
        })
    }

    render() {
        return (
            <div className={"body"}>
                <div className={"row"}>

                    <div className={"container settings-container col-8"}>
                        <h3>Settings</h3>
                        {
                            this.state.editing &&
                                <div>
                                    <div className={'form-group row'}>
                                        <label>First Name</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, first_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Last Name</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, last_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Location</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, location: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Bio</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, bio: event.target.value})}/>
                                    </div>
                                </div>
                        }
                        {
                            !this.state.editing &&
                                <div>
                                    <label>Name</label>
                                    <span>
                                        <p>{this.state.user.first_name + " " + this.state.user.last_name}</p>
                                        <a onClick={() => this.setState({editing: true})}>Edit</a>
                                    </span>
                                    <label>Location</label>
                                    <span>
                                        <p>{this.state.user.location}</p>
                                        <a onClick={() => this.setState({editing: true})}>Edit</a>
                                    </span>
                                    <label>Bio</label>
                                    <span>{this.state.user.bio}</span>
                                    <a onClick={() => this.setState({editing: true})} className={'display-right'}>Edit</a>
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
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.state.user, email: event.target.value})}/>
                                    </div>
                                    </div>
                                    <div className={"container right-column-container"}>

                                    <div className={'form-group row'}>
                                        <label>Password</label>
                                        <input className={"form-control"}
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
                                        <p>{this.state.user.email}</p>
                                    </div>
                                    <div className={'container right-column-container'}>
                                        <label>Password</label>
                                        <p>{this.state.user.password}</p>
                                    </div>
                                </div>
                        }

                        <span>
                            <div className={"container right-column-container"}>FAQ
                            <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                            </div>
                        </span>
                        <span>
                            <div className={"container right-column-container"}>Report a problem
                            <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                            </div>
                        </span>
                    </div>

                </div>
            </div>
        )
    }



}

const dispatchMapper = (dispatch) => ({
    createUser: (user) => create_user(user, dispatch),
    deleteUser: (user) => delete_user(user, dispatch),
    updateUser: (user) => update_user(user, dispatch),
    getUser: (userId) => get_user(userId, dispatch)
})

export default connect
(null, dispatchMapper)
(Settings)

// export default Settings;
