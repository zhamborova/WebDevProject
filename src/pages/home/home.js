import React from 'react';
import "./home.css";

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

        fetch(req)
            .then(response => {
                response.json().then(data=> {
                    let src = data.articles
                    let obj = {}

                    for(let i = 0; i < src.length; i++){
                        let ar = src[i]
                        if(!obj.hasOwnProperty(ar.author) && ar.urlToImage !== null ){
                         obj[ar.author] = ar;
                        }
                    }

                   let articles =  Object.keys(obj).map(key => obj[key]);
                   this.setState({articles:articles})
            })
    })
   }

    render() {

        return (

            <div className="d-flex">

           // <div className="d-flex row news-container w-75 m-auto">
            {this.state.articles.map( a =>
                <div className="card col-3 card-news" style={{width: "18rem",
                                                background: `url(${a.urlToImage})`}} key={a.id}>
                        <div className="card-body d-flex">
                            <div className=" card-title-container">
                            <p className="card-title">{a.title} </p>
                            </div>
                        </div>
                </div>
            )}
        </div>
        </div>)
    }

}

export default Home;



