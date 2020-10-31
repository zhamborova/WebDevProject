import React from 'react';
import "./home.css";
import NewsCard from "../../components/news-card/news-card";
import EventCard from "../../components/event-card/event-card";

class Home extends React.Component{

   state={
       articles: []
   }
    componentDidMount() {
        var url = 'http://newsapi.org/v2/everything?' +
            'q=Climate&' +
            'from=2020-10-30&' +
            'sortBy=relevancy&' +
            'apiKey=5f1246674c184e60bb9e88f19186b8b3&' +
            'pageSize=10';

        var req = new Request(url);

        // fetch(req)
        //     .then(response => {
        //         response.json().then(data=> {
        //             let src = data.articles
        //             let obj = {}
        //             console.log(data)
        //             for(let i = 0; i < src.length; i++){
        //                 let ar = src[i]
        //                 if(!obj.hasOwnProperty(ar.author) && ar.urlToImage !== null ){
        //                  obj[ar.author] = ar;
        //                 }
        //             }
        //
        //            let articles =  Object.keys(obj).map(key => obj[key]);
        //            this.setState({articles:articles})
        //     })
    //})
   }

    render() {
        console.log(this.state)
        return (

            <div className="d-flex flex-column">
                <div className="d-flex row news-container w-75 m-auto">
            {this.state.articles.map( a => <NewsCard article={a} />)}
          </div>

                <div className="d-flex row events-container w-75 m-auto">

                    {[1,2,3].map(i => <EventCard event={null}/>)  }
                </div>



        </div>)
    }

}

export default Home;



