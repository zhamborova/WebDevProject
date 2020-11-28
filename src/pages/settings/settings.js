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
import user_reducer from "../../redux/reducers/user-reducer";



class Settings extends React.Component {

    componentDidMount() {
        console.log('THIS USER')
        const userId = this.props.match.params.userId
        console.log(userId)
        this.props.getUser(userId)
        console.log(this.props.user)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const userId = this.props.match.params.userId
        const previousUserId = prevProps.match.params.userId
        if (userId !== previousUserId) {
            this.props.getUser(userId)
        }
    }

    render() {
        return (
            <div className={"body"}>
                <div className={"row"}>

                    <div className={"container settings-container col-8"}>
                        <h3>Settings</h3>
                        {
                            this.props.user.editing &&
                                <div>
                                    <div className={'form-group row'}>
                                        <label>First Name</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.props.user, first_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Last Name</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.props.user, last_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Location</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.props.user, location: event.target.value})}/>
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
                            !this.props.editing &&
                                <div>
                                    <label>Name</label>
                                    <span>
                                        <p>{this.props.user.first_name + " " + this.props.user.last_name}</p>
                                        <a onClick={() => this.setState({editing: true})}>Edit</a>
                                    </span>
                                    <label>Location</label>
                                    <span>
                                        <p>{this.props.user.location}</p>
                                        <a onClick={() => this.setState({editing: true})}>Edit</a>
                                    </span>
                                    <label>Bio</label>
                                    <span>{this.props.user.bio}</span>
                                    <a onClick={() => this.setState({editing: true})} className={'display-right'}>Edit</a>
                                </div>
                        }
                    </div>

                    <div className={"col-4"}>
                        {
                            this.props.editing &&
                                <div>
                                    <div className={"container right-column-container"}>

                                    <div className={'form-group row'}>
                                        <label>Email</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.props.user, email: event.target.value})}/>
                                    </div>
                                    </div>
                                    <div className={"container right-column-container"}>

                                    <div className={'form-group row'}>
                                        <label>Password</label>
                                        <input className={"form-control"}
                                               onChange={(event) =>
                                                   updateUser({...this.props.user, password: event.target.value})}/>
                                    </div>
                                    </div>
                                </div>
                        }
                        {
                            !this.props.editing &&
                                <div>
                                    <div className={"container right-column-container"}>
                                        <label>Email</label>
                                        <p>{this.props.user.email}</p>
                                    </div>
                                    <div className={'container right-column-container'}>
                                        <label>Password</label>
                                        <p>{this.props.user.password}</p>
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

const stateToPropertyMapper = (state) => ({
    user: state.users.user,
    userId: state.users.userId
})

const dispatchMapper = (dispatch) => ({
    createUser: (user) => create_user(user, dispatch),
    deleteUser: (user) => delete_user(user, dispatch),
    updateUser: (user) => update_user(user, dispatch),
    getUser: (userId) => get_user(userId, dispatch)
})

export default connect
(stateToPropertyMapper, dispatchMapper)
(Settings)

// export default Settings;
