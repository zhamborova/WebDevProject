import React from 'react';
import './event-card.css';
import img from './event-img.png'
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const EventCard = ({event,vertical, length}) => {

    let v = vertical ? "v" : "";

    return <Link to={`/events/${event.id}`}>
        <div className={`card event-card ${v}`}>
            <img className={`card-img-top ${v}`} src={event.image} alt="Card image cap"/>
            <div className={`card-body ${v}`}>
                <div className={`card-details ${v}`}>
                <h5 className="card-title">{event.date}, {event.start_time}</h5>
                <h6 className="card-subtitle mb-2">{event.title}</h6>
                <p className={`card-text ${v}`}>{event.description}</p>
                </div>
                <div className={`participants-container d-flex ${v}`}>
                    <div>{event.participants.map(p => {
                        return <img src={p.img} className="participant-thumbnail"/>

                    })}
                    </div>
                    <span className={`others ${v}`}> & {length < 4 ? 0 : length-3} others </span>
                </div>
                <div className={`m-auto more-info v `}>
                    <p>More info <FontAwesomeIcon icon={faArrowRight}/></p>

                </div>
            </div>

        </div>
    </Link>
}
export default EventCard;
