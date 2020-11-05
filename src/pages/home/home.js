import React from 'react';
import "./home.css";
import NewsCard from "../../components/news-card/news-card";
import EventCard from "../../components/event-card/event-card";
import newsService from '../../services/news-service';
import {Link} from "react-router-dom";
import bg from './nature.png'
import {faSearch, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

                <div className="events-container ">
                    <div className="d-flex">
                        <h3>Events</h3>
                        <Link to={'/events'} className="ml-auto mr-1">View all</Link>
                        <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                    </div>
                    <div className="row justify-content-center">
                    {[1,2,3].map(i => <EventCard event={null}/>)  }
                    </div>
                </div>

                <button className="btn btn-success host-btn "> Host event </button>

        </div>)
    }

}

export default Home;



