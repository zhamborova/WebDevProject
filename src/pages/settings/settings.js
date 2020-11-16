import React from 'react';
import './settings.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";


class Settings extends React.Component {

    render() {
        return(
            <div className={"body"}>
                <div className={"row"}>
                    <div className={"container settings-container col-8"}>
                        <h3>Your profile</h3>
                        <div>
                            <label>Name</label>
                            <input className={"form-control"}/>
                            <a>Done</a>
                        </div>
                        <div>
                            <label>Location</label>
                            <input className={"form-control"}/>
                            <a>Done</a>

                        </div>
                        <div>
                            <label>Email</label>
                            <input className={"form-control"}/>
                            <a>Done</a>

                        </div>
                        <div>
                            <label>Password</label>
                            <input className={"form-control"}/>
                            <a>Done</a>

                        </div>
                    </div>
                    <div className={"col-4"}>
                        <span>
                            <div className={"container faq-container"}>FAQ
                            <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                            </div>
                        </span>
                        <span>
                            <div className={"container report-container"}>Report a problem
                            <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Settings;
