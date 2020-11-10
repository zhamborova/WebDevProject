import React from "react";
import './user-card.css';


const UserCard = (props) => {
  const{first_name,last_name, img, url, host} = props.p
   return <a href={url}>
       <div className="card  card-user" style={{width: "9rem"}}>
         <div className="card-body d-flex flex-column">
             <img src={img} />
        <div className=" card-name-container m-auto ">
            <p  className="card-title">{first_name} {last_name}</p>
            {host ? <p className="w-50 m-auto">Host</p> : null}
        </div>
    </div>
   </div></a>

}

export default UserCard;
