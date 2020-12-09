import React from 'react';
import './event-card.css';
import img from './event-img.png'
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

 function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const EventCard = ({event,vertical, users}) => {
    const { width } = useWindowDimensions();
    let v = vertical ? "v" : "";
    if(width <= 600){
        v=""
    }
    let length = event.participants.length;
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
                    <div>{users.map(p => {
                        return <img src={p.image} className="participant-thumbnail"/>

                    })}
                    </div>
                    <span className={`others ${v}`}> & {length < 4 ? 0 : length-3} others </span>
                </div>
                <div className={`m-auto more-info ${v}`}>
                    <p>More info <FontAwesomeIcon icon={faArrowRight}/></p>

                </div>
            </div>

        </div>
    </Link>
}

const mapStateToProps = (state, ownProps) =>{
    let ps = [1,2,3]
    let {users} = state.users
    let list = ps.map(p => users[p])

    return{users:list}

}


export default connect(mapStateToProps)(EventCard);
