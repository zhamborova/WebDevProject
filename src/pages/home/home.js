import React from 'react';
import "./home.css";
import NewsCard from "../../components/news-card/news-card";
import EventCard from "../../components/event-card/event-card";
import newsService from '../../services/news-service';

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

            <div className="d-flex flex-column">
                <div className="d-flex row news-container w-75 m-auto">
            {this.state.articles.slice(0, 3).map( a => <NewsCard article={a} />)}
          </div>

                <div className="d-flex row events-container w-75 m-auto">

                    {[1,2,3].map(i => <EventCard event={null}/>)  }
                </div>



        </div>)
    }

}

export default Home;



