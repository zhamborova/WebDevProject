import React from 'react';
import NewsCard from "../../components/news-card/news-card";
import newsService from '../../services/news-service'

class News extends React.Component{

    state={
        search: "",
        articles:[],
    }

      componentDidMount() {
        this.searchAll();
     }


    searchAll = () => {
        newsService.fetchAllNews(20).then(data =>

            this.setState({articles: data.articles})
        )

    }

    searchByTitle = () =>{
        console.log('here')
        newsService.fetchByTitle(this.state.search).then( data =>
            this.setState({articles: data.articles,
                                 search: ""}))
    }

    render() {
        console.log(this.state)
        return (
            <div className="news-page-container d-flex flex-column  m-auto ">
                <div className="w-50 d-flex flex-column m-auto">
                <input type="text" className="news-search form-control mt-3"
                       placeholder="Search..."
                       value={this.state.search}
                       onChange={(e)=> this.setState({search:e.target.value})}/>
                <button className="form-control" onClick={()=> this.searchByTitle()}>Submit</button>
                </div>
                <div className="news-list d-flex w-75 flex-wrap m-auto ">

                    {this.state.articles.map(a => <NewsCard article={a}/>)}
                </div>
                {this.state.articles.length === 0 ? <h5>Sorry no match found!</h5> : null}
            </div>
        )
    }
}

export  default News;
