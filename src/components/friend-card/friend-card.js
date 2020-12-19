import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {updateUser} from "../../services/user-service";
import {setCurrentUser} from "../../redux/actions/user-actions";
import "./friend-card.css"

const FriendCard = ({user, current, userFriends, isFriend, updateCurrentUser, screenSize}) => {

    return (
        <div className={"card event-card v cards "}>
            {console.log(user.image)}
            <div className="profile-image col-3 mr-2 d-flex flex-column w-100 h-100 friend-photo-padding">
                <Link to={`/users/${user.id}`}> <img className=" friend-image" src={user.image} alt="Card image cap"/>
                </Link>
            </div>
            <div className={"friend-card-content-padding"}>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold mb-0">{user.first_name} {user.last_name[0]}.</p>
                    <p>
                        <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt}/>
                        {user.location.city}, {user.location.country}</p>
                </div>
            </div>

            {isFriend ?
                <button className="form-control rm-btn w-25 ml-auto mr-4 friend-card-content-padding responsive-width"
                        onClick={() => {
                            updateUser({
                                ...user,
                                friends: userFriends.filter(f => f !== current.id)
                            })
                                .then(u => {
                                    updateUser({
                                        ...current,
                                        friends: current.friends.filter(f => f !== u.id)
                                    })
                                        .then(curr => {
                                            updateCurrentUser(curr.id)
                                        })
                                })
                        }
                        }>
                    Remove
                </button> :
                <button className="form-control add-btn w-25 ml-auto mr-4 friend-card-content-padding responsive-width"
                        onClick={() => {
                            userFriends.push(current.id)
                            updateUser({...user, friends: userFriends})
                                .then(u => {
                                    current.friends.push(u.id)
                                    updateUser({
                                        ...current,
                                        friends: current.friends
                                    })
                                        .then(curr => {
                                            updateCurrentUser(curr.id)
                                        })
                                })
                        }
                        }>
                    Add
                </button>
            }
        </div>
    )


}

export default FriendCard;
