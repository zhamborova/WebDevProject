import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";
import "./search-events.css";
import stringSimilarity from 'string-similarity'
import {Link} from "react-router-dom";
import {NavBar} from "../../components/navbar/navbar";
import {get_events} from "../../services/events-service";
import {set_events} from "../../redux/actions/event-actions";


class SearchEvents extends React.Component{
    state={
        search: "",
        results: [],
        all: [],
        current_user: {}
    }


    componentDidMount = () =>{

        get_events().then(events => {
                this.setState({all:events, results:events})
            this.props.set_events(events)
            let {searchEvent} = this.props.match.params
            if(searchEvent){
                this.setState({search:searchEvent}, ()=>{
                    this.searchEvents();
                })

            }

        })




    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.match.params.search !== this.props.match.params.search){
            let {searchEvent} = this.props.match.params
            if(searchEvent){
                this.setState({search:searchEvent})
                this.searchEvents();
            }
        }

    }


    searchEvents = () => {
       let search = this.format(this.state.search)
       let new_results = this.state.all.filter(e =>
           stringSimilarity.compareTwoStrings(this.format(e.title), search) >= 0.3)
       this.setState({results:new_results})
    }

   format = (str) => str.trim().toLowerCase();

    render(){
        return(
            <div className="container d-flex flex-column w-75 mt-5">
                        <h1 className="ml-3">Events</h1>
                        <div className="d-flex container  ">
                            <input className="form-control" placeholder="Search events..." value={this.state.search}
                                   onChange={(e)=> this.setState({search:e.target.value})}/>
                            <Link to={`/search-events/${this.state.search}`} className="ml-3 w-25">
                                <button className="form-control search-btn ">Search</button></Link>
                        </div>
                         <div className="d-flex justify-content-evenly mt-3">
                         <button className="form-control w-25 ml-3 mr-2"> All events</button>
                         <button className="form-control w-25"> Your events</button>
                         </div>
                        <div className="search-results container row m-auto">
                            {this.state.results.map(e => <EventCard event={e} key={e.id} vertical />)}

                        </div>
            </div>


        )
    }

}

const mapStateToProps = (state) => ({
        current_user: state.users.current_user
    })

const dispatchMapper = dispatch => ({
    set_events: (events) => set_events(dispatch, events)
})
export default connect(mapStateToProps, dispatchMapper)(SearchEvents);
