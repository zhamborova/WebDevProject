import React from 'react';
import './settings.css';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {create_user, delete_user, update_user,} from '../../redux/actions/user-actions';


class Settings extends React.Component {

    state = {
        user: {},
        editing: false
    }

    componentDidMount() {
        let {user} = this.props
        this.setState({user},()=>{
            console.log(this.state.user)
        })
    }



    render() {
        console.log(this.state)
        return (
            <div className={"body"}>
                <div className={"row"}>
                    <div className={"container profile-container col-4"}>
                        <div className="d-flex justify-content-between">
                            <h3>Settings</h3> <a href={"#"}
                                                 onClick={() => this.setState({editing: true})}
                                                  className={'display-right edit-color mt-2'}>Edit</a></div>
                        { this.state.editing &&
                                <div>
                                    <p className={"align-center"}>
                                        <img src={this.state.user.img} className={"default-size"}/>
                                    </p>
                                    <div className={'form-group row'}>
                                        <label>First Name</label>
                                        <input className={"form-control"} placeholder={this.state.user.first_name}
                                               onChange={(event) =>
                                                   update_user({...this.state.user, first_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Last Name</label>
                                        <input className={"form-control"} placeholder={this.state.user.last_name}
                                               onChange={(event) =>
                                                   update_user({...this.state.user, last_name: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Location</label>
                                        <input className={"form-control"} placeholder={this.state.user.location.street +
                                        " " + this.state.user.location.city + " " +
                                        this.state.user.location.country }
                                               onChange={(event) =>
                                                   update_user({...this.state.user, location: event.target.value})}/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <label>Bio</label>
                                        <input className={"form-control"} placeholder={this.state.user.bio}
                                               onChange={(event) =>
                                                   update_user({...this.state.user, bio: event.target.value})}/>
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
                                    <span>
                                        {/*{this.state.user.location.city}*/}
                                    </span>
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
                                                    update_user({...this.state.user, email: event.target.value})}/>

                                    </div>
                                    <div className={"container right-column-container"}>
                                        <label>Password</label>
                                        <input className={"form-control"} placeholder={this.state.user.password}
                                               onChange={(event) =>
                                                   update_user({...this.state.user, password: event.target.value})}/>
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

                        <div className={"container-padding"}>
                        <span>
                            <div className={"container right-column-container bigger-font"}>FAQ
                            <FontAwesomeIcon className={"mt-1 display-right"} icon={faLongArrowAltRight}/>
                            </div>
                        </span>
                        </div>
                        <div className={"container-padding"}>
                        <span>
                            <div className={"container right-column-container"}>Report a problem
                            <FontAwesomeIcon className={"mt-1 display-right"} icon={faLongArrowAltRight}/>
                            </div>
                        </span>
                        </div>
                        {
                            this.state.editing &&
                            <span>
                                <div className={"button-padding"}>
                                    <a href={"#"} onClick={() => {
                                        this.setState({editing: false})
                                        this.props.updateUser(this.state)
                                    }} className={'display-right'}>
                                    <button type="button" className="btn btn-outline-secondary">Done Editing</button>
                                    </a>
                                </div>
                            </span>
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


