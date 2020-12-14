import React from 'react';
import './event-card.css';

import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useState, useEffect} from 'react';
import {get_users_for_event} from "../../services/events-service";



class EventCard extends React.Component {
 state ={
     users: []
}

    componentDidMount() {
        let {participants} = this.props.event
        get_users_for_event([...participants, this.props.event.host_id], this.props.event.id).then(users =>
           this.setState({users}, ))

    }

    getDate = (date) => {
        var date = new Date(date);
        return date.toDateString()
    }

    getInitialState = () => {
        return {windowWidth: window.innerWidth};
    }

    render() {
    let {event,vertical} = this.props
    let {users} = this.state
    let v = false
        console.log(this.getInitialState().windowWidth)
   if (this.getInitialState().windowWidth <= 600) {
       v = true
   }
    let length = users.length;

    return (
        <Link to={`/events/${event.id}`} key={event.id}>
        {!v ?
                    <div className={`card event-card ${v}`}>
                        <img className={`card-img-top ${v}`} src={event.image} alt="Card image cap"/>
                        <div className={`card-body ${v}`}>
                            <div className={`card-details ${v}`}>
                                <h5 className="card-title">{this.getDate(event.date)}, {event.start_time}</h5>
                                <h6 className="card-subtitle mb-2">{event.title}</h6>
                                <p className={`card-text ${v}`}>{event.description}</p>
                            </div>

                            <div className={`participants-container d-flex ${v}`}>
                                <div>{users.map(p => {
                                    return <img src={p.image} className="participant-thumbnail"/>

                                })}
                                </div>
                                <span className={`others ${v}`}> & {length < 4 ? 0 : length - 3} others </span>
                            </div>
                            <div className={`m-auto more-info ${v}`}>
                                <p>More info <FontAwesomeIcon icon={faArrowRight}/></p>

                            </div>
                        </div>

                    </div>
                :
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src={event.image} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{event.title}</h5>
                            <p className="card-text">{event.description}</p>
                            <div className={`m-auto more-info ${v}`}>
                                <p>More info <FontAwesomeIcon icon={faArrowRight}/></p>
                            </div>
                        </div>
                </div>
        }
        </Link>


    )
  }
}


export default  EventCard;

