import React from 'react';
import "./home.css";
import NewsCard from "../../components/news-card/news-card";
import EventCard from "../../components/event-card/event-card";
import newsService from '../../services/news-service';
import {Link} from "react-router-dom";
import bg from '../../assets/nature.png'
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavBar} from "../../components/navbar/navbar";
import {connect} from "react-redux";
import { get_events} from "../../services/events-service"
import { set_events} from "../../redux/actions/event-actions";


class Home extends React.Component{

   state={
       articles: [],
       events: [],
   }

     componentDidMount() {
        get_events().then(events => {
            this.setState({events:events.slice(0,3)})
            this.props.set_events(events);
        })
        this.setState({events:this.props.events})
          newsService.fetchAllNews(10).then(data=> {
            let src = data.articles
            let obj = {}
            for(let i = 0; i < src.length; i++){
                let ar = src[i]
                if(!obj.hasOwnProperty(ar.author) && ar.urlToImage !== null ){
                    obj[ar.author] = ar;
                }
            }
            let articles =  Object.keys(obj).map(key => obj[key]);

           this.setState({articles})
        })
   }


    render() {
        return (

            <div className="d-flex flex-column home-container">
                <NavBar/>
                <div className="search-container justify-content-center mb-3"
                   style={{background: `url(${bg})`}}>

                  <div className="d-flex m-auto w-50">
                  <input className="form-control"
                         placeholder="Search events..."/>
                      <button className="btn btn-success btn-submit ml-2">Submit</button>
                  </div>
              </div>


                <div className="news-container ">
                    <div className="d-flex">
                        <h3>News</h3>
                    <Link to={'/search-news'} className="ml-auto mr-1">View all
                    </Link>
                        <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                    </div>
              <div className="row justify-content-center">
                  {this.state.articles.slice(0, 3).map( a => <NewsCard article={a} key={a.title } />)}
              </div>
          </div>

                <div className="events-container ">
                    <div className="d-flex">
                        <h3>Events</h3>
                        <Link to={'/events'} className="ml-auto mr-1">View all</Link>
                        <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                    </div>
                    <div className="row justify-content-center">
                    {this.state.events.map(e => <EventCard event={e}
                                                           key={e.id}
                                                           vertical={false}/>)  }
                    </div>
                </div>

               <Link to="/users/:userId/events" className="m-auto">
                   <button className="btn btn-success host-btn " > Host event </button></Link>

        </div>)
    }

}

const mapStateToProps = (state) =>{

  return{ events: []}

}
const mapDispatchToProps = dispatch => ({
    set_events: (events) => set_events(dispatch, events),

})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
