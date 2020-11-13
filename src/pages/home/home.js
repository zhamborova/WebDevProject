import React from 'react';
import "./home.css";
import NewsCard from "../../components/news-card/news-card";
import EventCard from "../../components/event-card/event-card";
import newsService from '../../services/news-service';
import {Link} from "react-router-dom";
import bg from '../../assets/nature.png'
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import host_img from "../../assets/Ellipse 1.png";
import event_img from "../../assets/lake.png";

const event = {

    title: "Lake Baikal cleanup",
    host_name: "Bryan Young",
    host_img: host_img,
    event_img: event_img,
    event_date:{startTime: "", endTime: "", date: ""},
    event_location: {street: "", city:"", state: "", country: "", zip: ""},
    event_dscrp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    event_tags: ["hashtag1", "hashtag2", "community-service",],
    participants: [1,2,3,]
}

class Home extends React.Component{

   state={
       articles: []
   }
    async componentDidMount() {

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
              <div className="search-container justify-content-center mb-3"
                   style={{background: `url(${bg})`}}>

                  <div className="d-flex m-auto w-50">
                  <input className="form-control"
                         placeholder="Search events..."/>
                  <input className="form-control w-50"
                             placeholder="Search locations..."/>
                      <button className="btn btn-success btn-submit ml-2">Submit</button>
                  </div>


              </div>


                <div className="news-container ">
                    <div className="d-flex">
                        <h3>News</h3>
                    <Link to={'/news'} className="ml-auto mr-1">View all
                    </Link>
                        <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                    </div>
              <div className="row justify-content-center">
                  {this.state.articles.slice(0, 3).map( a => <NewsCard article={a} />)}
              </div>
          </div>

                <div className="events-container">
                    <div className="d-flex">
                        <h3>Events</h3>
                        <Link to={'/events'} className="ml-auto mr-1">View all</Link>
                        <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                    </div>
                    <div className="row justify-content-center">
                    {[1,2,3].map(i => <EventCard event={event}/>)  }
                    </div>
                </div>

               <Link to="/users/:userId/events" className="m-auto">
                   <button className="btn btn-success host-btn " > Host event </button></Link>

        </div>)
    }

}

export default Home;



