import React from "react";
import './event-list-card.css';
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import img from "../event-card/event-img.png";
import el1 from "../../assets/Ellipse 2.png";
import el2 from "../../assets/Ellipse 3.png";
import el3 from "../../assets/Ellipse 4.png";


const EventListCard = ({event}) =>
    <div className={'side-padding'}>
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={event.event_img} className={"card-img image-sizing"}/>
                </div>
                <div className={'col-md-7'}>
                    <div className={"card-body form-group row"}>
                        <div className={'col-5 top-padding'}>
                            <p>{event.event_date.date}</p>
                            <h5 className="card-title">{event.title}</h5>
                            <p className="card-text">{event.event_dscrp}</p>
                        </div>
                        <div className={'col-4'}>
                            <div>
                                <img src={el1} className="participant-thumbnail"/>
                                <img src={el2} className="participant-thumbnail"/>
                                <img src={el3} className="participant-thumbnail"/>
                            </div>
                                <div className="m-auto">
                                    & 7 others
                                </div>
                        </div>
                        <div className={'col-3 ml-auto'}>
                            <a href={"#"} className={'text-padding text-success'}>More info</a>
                            <FontAwesomeIcon className={"mt-1 text-success"} icon={faLongArrowAltRight}/>
                        </div>
                    </div>

                </div>
                </div>
            </div>
    </div>


export default EventListCard;