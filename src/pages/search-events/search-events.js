import React from "react";
import {connect} from "react-redux";
import EventCard from "../../components/event-card/event-card";
import "./search-events.css";

class SearchEvents extends React.Component{
    state={
        search: "",
        results: [],
    }


    componentDidMount = () =>{
        let {results} = this.props
        this.setState({results});

    }
   searchEvents = () => {
       let searchStr = this.formatStr(this.state.search)
       let new_results = this.state.results.filter(e => this.formatStr(e.title).includes(searchStr))
       this.setState({results:new_results})
    }

    formatStr = (str) =>{
       return str.trim().toLowerCase()
    }
    render(){

        return(
            <div className="container d-flex flex-column w-75 mt-5">
                <h1 className="ml-3">Events</h1>
                <div className="d-flex container  ">
                <input className="form-control" placeholder="Search events..."
                       onChange={(e)=> this.setState({search:e.target.value})}/>
                <button className="form-control search-btn w-25 ml-3" onClick={()=> this.searchEvents()}>Search</button>
                </div>
                <div className="search-results container  m-auto">
                    {this.state.results.map(e => <EventCard event={e} key={e.id} vertical />)}
                </div>
            </div>


        )
    }

}

const mapStateToProps = (state) =>{

    return{  results: state.events.events}

}

export default connect(mapStateToProps)(SearchEvents);
