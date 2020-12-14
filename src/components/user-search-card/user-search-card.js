
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import './user-search-card.css'
import {Link} from "react-router-dom";

const UserSearchCard = ({user, friend}) =>{

    return <div className="user-search-container ">

        <Link to={`/users/${user.id}`}>  <img className="search-img" src={user.img}/></Link>

               <div className="d-flex flex-column">
                <p className="font-weight-bold mb-0">{user.first_name} {user.last_name[0]}.</p>
                <p>
                    <FontAwesomeIcon  className="mr-2" icon={faMapMarkerAlt}/>
                    {user.location.city}, {user.location.country}</p>
               </div>

               {friend ?
                   <button className="form-control rm-btn w-25 ml-auto mr-4">Remove</button> :
                   <button className="form-control add-btn w-25 ml-auto mr-4">Add</button>
               }

    </div>
}

export default UserSearchCard;
