import React from "react";
import './user-card.css';


const UserCard = (props) => {
  const{first_name,last_name, img, url, host} = props.p
   return <a href={url}>
       <div className="card  card-user" style={{width: "18rem"}}>
         <div className="card-body d-flex">
             <img src={img} />
        <div className=" card-title-container">
            <p  className="card-title">{first_name} </p>
            {host ? <p>Host</p> : null}
        </div>
    </div>
   </div></a>

}

export default UserCard;
