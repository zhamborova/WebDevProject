import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";
import "./search-events.css";
import {get_events} from "../../services/events-service";
import {set_events} from "../../redux/actions/event-actions";
import {get_events_for_user} from "../../services/user-service";
import Button from "@material-ui/core/Button";
import {withTheme} from "@material-ui/styles";


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

        let my_events = this.state.my_events ? "primary" : "info";
        let all_events = !this.state.my_events ? "primary" : "info";
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                        <h1 className="">Events</h1>
                        <div className="d-flex justify-content-between flex-fill mt-3">
                            <Button  size="large"
                                     style={{width:'80%', marginRight: "20px"}}
                                     color={all_events}
                                     variant="contained"
                                    onClick={() => this.setState({my_events:false})}> All events</Button>
                            <Button
                                    size="large"
                                    style={{width:'80%'}}
                                    color={my_events}
                                    variant="contained"
                                    onClick={() => this.setState({my_events:true})}> Your events</Button>
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


export default withTheme(connect(mapStateToProps)(SearchEvents));
