
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {updateUser} from "../../services/user-service";
import {setCurrentUser} from "../../redux/actions/user-actions";
//
// class FriendCard extends React.Component {
//     state = {
//         friend: {}
//     }
//
//     componentDidMount() {
//
//     }
//
//     render() {
//         return(
//             <div className="user-search-container ">
//
//                 <Link to={`/users/${user.id}`}>  <img className="search-img" src={user.img}/></Link>
//
//                 <div className="d-flex flex-column">
//                     <p className="font-weight-bold mb-0">{user.first_name} {user.last_name[0]}.</p>
//                     <p>
//                         <FontAwesomeIcon  className="mr-2" icon={faMapMarkerAlt}/>
//                         {user.location.city}, {user.location.country}</p>
//                 </div>
//
//                 {friend ?
//                     <button className="form-control rm-btn w-25 ml-auto mr-4">Remove</button> :
//                     <button className="form-control add-btn w-25 ml-auto mr-4">Add</button>
//                 }
//
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = (state) => ({
//     current_user: state.users.current_user
// })

const FriendCard = ({user, current, userFriends, isFriend, updateCurrentUser}) =>{

    return <div className="user-search-container ">
        {console.log("CURRENT AS PASSED IN ")}
        {console.log(current.friends)}
        {console.log(current)}
        <Link to={`/users/${user.id}`}>  <img className="search-img" src={user.img}/></Link>

        <div className="d-flex flex-column">
            <p className="font-weight-bold mb-0">{user.first_name} {user.last_name[0]}.</p>
            <p>
                <FontAwesomeIcon  className="mr-2" icon={faMapMarkerAlt}/>
                {user.location.city}, {user.location.country}</p>
        </div>

        {isFriend ?
            <button className="form-control rm-btn w-25 ml-auto mr-4"
                    onClick={() => {
                        console.log("REMOVE CLICKED")
                        updateUser({...user,
                            friends: userFriends.filter(f => f !== current.id)})
                            .then(u => {
                                console.log("FRIEND REMOVED")
                                console.log(u)
                                updateUser({...current,
                                    friends: current.friends.filter(f => f !== u.id)})
                                    .then(curr => {
                                        console.log("NEW UCRR")
                                        console.log(curr)
                                        updateCurrentUser(curr)
                                    })
                            })
                    }
                    }>
                Remove
            </button> :
            <button className="form-control add-btn w-25 ml-auto mr-4"
                    onClick={() => {

                        userFriends.push(current.id)
                        updateUser({...user, friends: userFriends})
                            .then(u => {
                                console.log("FRIEND FRIENDS")
                                console.log(u.friends)
                                console.log("CURR FRIENDS BEFORE")
                                console.log(current.friends)
                                current.friends.push(u.id)
                                updateUser({...current,
                                    friends: current.friends})
                                    .then(curr => {
                                        console.log("CURR FRIENDS")
                                        console.log(curr.friends)
                                        updateCurrentUser(curr)
                                    })
                            })
                    }
                    }>
                Add
            </button>
        }

    </div>
}

export default FriendCard;
