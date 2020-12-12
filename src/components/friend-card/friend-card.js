import React from "react";
import './friend-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";


const FriendCard = ({friend}) =>
    <div className={'top-padding side-padding'}>
        <div className={"card"}>
            <div className={"card-body"}>
                <div className={'form-group row'}>
                    <div className={'col-auto'}>
                        <img src={friend.img} width={'100px'} height={'100px'}/>
                    </div>
                    <div className={'col-auto'}>
                        <p className={'name-padding'}>{friend.first_name} {friend.last_name}</p>
                        <div className={'form-group row'}>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <p className={'side-padding'}>{friend.location}</p>
                        </div>
                    </div>
                    <div className={'col-2 ml-auto button-padding'}>
                        <button className={'btn btn-outline-dark form-control'}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


export default FriendCard;