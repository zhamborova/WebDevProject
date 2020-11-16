
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import './user-search-card.css'
import {Link} from "react-router-dom";


const UserSearchCard = ({first_name,last_name, location, img, id, friend}) =>{


    return <div className="user-search-container ">

        <Link to={`/users/:userId`}>  <img className="search-img" src={img}/></Link>

               <div className="d-flex flex-column">
                <p className="font-weight-bold mb-0">{first_name} {last_name[0]}.</p>
                <p>
                    <FontAwesomeIcon  className="mr-2" icon={faMapMarkerAlt}/>
                    {location.city}, {location.country}</p>
               </div>

               {!friend ?
                   <button className="form-control rm-btn w-25 ml-auto mr-4">Remove</button> :
                   <button className="form-control add-btn w-25 ml-auto mr-4">Add</button>
               }

    </div>
}

export default UserSearchCard;
