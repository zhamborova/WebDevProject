import React from "react";
import './user-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link, Redirect} from "react-router-dom";
import {fetchUserById} from "../../services/user-service";


class UserCard extends React.Component {
    is_mounted = false;
    state ={

    }
    componentDidMount() {
        this.is_mounted = true
        if(this.props.id){
        fetchUserById(this.props.id).then(user=>this.setState({...user}))
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.id !== this.props.id){
           fetchUserById(this.props.id).then(user=>this.setState({...user}))
       }
    }

    componentWillUnmount() {
        this.is_mounted=false;
    }

    render() {
        console.log(this.props)
        const {first_name, last_name, image,} = this.state;
        const {removeUser, editing, host, id,  } = this.props;
        return <div className="card  card-user" style={{width: "9rem"}}>
            <div className="card-body d-flex flex-column">
                <div className="d-flex ">
                    <Link to={`/users/${id}`}><img className="user-img" src={image}/></Link>
                    {(!host && editing) ?
                        <FontAwesomeIcon icon={faTimes} onClick={(e) => {
                            e.preventDefault();
                            removeUser(id)
                        }}/> :
                        null
                    }

                </div>
                <div className=" card-name-container m-auto ">
                    <p className="card-title">{first_name} {last_name}</p>
                    {host ? <p className="w-50 m-auto">Host</p> : null}
                </div>
            </div>
        </div>

    }

}

export default UserCard;
