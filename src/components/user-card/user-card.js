import React from "react";
import './user-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const UserCard = (props) => {
 const{first_name,last_name, image, id} = props.user;
  const {removeUser, editing, host} = props;
   return <div className="card  card-user" style={{width: "9rem"}}>
         <div className="card-body d-flex flex-column">
             <div className="d-flex ">

                 <Link to={`/users/${id}`}><img src={image} /></Link>
                 {(!host && editing)  ?
                     <FontAwesomeIcon icon={faTimes} onClick={(e) =>

                     {e.preventDefault();
                       removeUser(id)}}/> :
                     null
                 }

             </div>
        <div className=" card-name-container m-auto ">
            <p  className="card-title">{first_name} {last_name}</p>
            {host ? <p className="w-50 m-auto">Host</p> : null}
        </div>
    </div>
   </div>

}

const mapStateToProps = (state, ownProps) =>{

    let id = parseInt(ownProps.id)
    let user = state.users.users[id]
    console.log(id, state.users.users)
    return{ user}

}


export default connect(mapStateToProps)(UserCard);
