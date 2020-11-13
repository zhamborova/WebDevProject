import React from 'react';
import './profile.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import InputBox from "../../components/input-box/input-box";

const profile = {
    name: 'John Snow',
    location: 'Boston',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    email: 'john.snow@gmail.com',
    password: 'password'
}

class Profile extends React.Component {

    state = {
        profile: profile
    }

    render() {
        return (
            <div className={"body"}>
                <div className={"row"}>
                    <div className={"container profile-container col-8"}>
                        <h3>Your profile</h3>
                        <InputBox field={this.state.profile.name} hasType={false}/>
                        <InputBox field={this.state.profile.location} hasType={false}/>
                        <InputBox field={this.state.profile.bio} hasType={false}/>
                    </div>
                    <div className={"col-4"}>
                        <div className={"container right-column-container"}>
                            <label>Email</label>
                            <p>{this.state.profile.email}</p>
                        </div>
                        <div className={'container right-column-container'}>
                            <label>Password</label>
                            <p>{this.state.profile.password}</p>
                        </div>
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

export default Profile;