import React from 'react';
import "./home.css";
import NewsCard from "../../components/news-card/news-card";
import newsService from '../../services/news-service';
import {Link} from "react-router-dom";
import bg from '../../assets/nature.png'
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import { get_events} from "../../services/events-service"
import Button from "@material-ui/core/Button";
import {withTheme} from "@material-ui/core/styles";
import EventCard from "../../components/event-card/event-card";


class Home extends React.Component{

   state={
       articles: [],
       events: [],

   }

     componentDidMount() {

        get_events().then(events => {
            if(events) {
                let ev = events.slice(0,3)
                this.setState({events:ev})

            }
        })

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
       let style = this.state.events.length < 3 ? "justify-content-start" : "justify-content-between"
        return (
            <div className="d-flex flex-column home-container">
                <div className="search-container justify-content-center mb-3"
                   style={{background: `url(${bg})`}}>
                    <div className="jumbotron">
                        <h4 className="display-5">Welcome, fellow protector of nature!</h4>
                        <p className="lead">
                            Our clean-up platform aims to bring people and communities together to help clean
                            natural sites or places that would benefit from that.
                            Here you can register, attend such events, create new cleaning events, and look up related news!
                        </p>

                    </div>
              </div>


                <div className="news-container ">

                    <div className="d-flex">

                        <h3>News</h3>
                    <Link to={'/search-news'} className="ml-auto mr-1">View all
                    </Link>
                        <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                    </div>
                    <div className="row justify-content-between">
                        {this.state.articles.slice(0, 3).map( a => <NewsCard article={a} key={a.title } />)}
                    </div>
                    </div>


                <div className="events-container">
                    <div className="d-flex">
                        <h3>Events</h3>
                        <Link to={this.props.current_user ? '/events' : '/'} className="ml-auto mr-1">View all</Link>
                        <FontAwesomeIcon className="mt-1" icon={faLongArrowAltRight}/>
                    </div>
                    <div className={`row ${style}`}>
                    {this.state.events.map(e => <EventCard event={e}
                                                           key={e.id}
                                                           vertical={false}/>)  }
                    </div>
                </div>

                {this.props.current_user &&
                <Link to={`/users/${this.props.current_user.id}/create`} className="m-auto">
                    <Button  variant="contained"
                             color="primary"
                             size="large">
                        Host event </Button></Link>
                }


        </div>)
    }

}

const mapStateToProps = (state) =>{
  return{current_user: state.users.current_user}

}


export default withTheme(connect(mapStateToProps)(Home));
