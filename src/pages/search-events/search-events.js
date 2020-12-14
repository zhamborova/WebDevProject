import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";
import "./search-events.css";
import {get_events} from "../../services/events-service";
import {set_events} from "../../redux/actions/event-actions";
import {get_events_for_user} from "../../services/user-service";


class SearchEvents extends React.Component{
    state={
        all: [],
        user_events: [],
        current_user: {},
        my_events: true,

    }

    componentDidMount = () =>{
        const userId = this.props.current_user.id
        get_events().then(events => {
            this.setState({all: events})
        })
        get_events_for_user(userId)
            .then(es => this.setState({user_events: es}))


    }




    render(){
        let my_events = this.state.my_events ? "btn-success" : "btn-outline-secondary";
        let all_events = !this.state.my_events ? "btn-success" : "btn-outline-secondary";
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                        <h1 className="ml-3">Events</h1>
                        <div className="d-flex justify-content-evenly flex-fill mt-3">
                            <button className={`form-control ml-3 mr-2 btn ${all_events}`}
                                    onClick={() => this.setState({my_events:false})}> All events</button>
                            <button className={`form-control  btn ${my_events}`}
                                    onClick={() => this.setState({my_events:true})}> Your events</button>
                        </div>
                {
                    !this.state.my_events ?
                    <div className="evnts-container ">
                        {this.state.all.map(e => <EventCard event={e} key={e.id} vertical />)}

                    </div> :
                    <div className="evnts-container">
                        {this.state.user_events.map(e => <EventCard event={e} key={e.id} vertical />)}

                    </div>
                }

            </div>


        )
    }

}

const mapStateToProps = (state) => ({
        current_user: state.users.current_user
    })


export default connect(mapStateToProps)(SearchEvents);
