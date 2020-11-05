import React from 'react';
import NewsCard from "../../components/news-card/news-card";
import newsService from '../../services/news-service'
import './news.css'
import {Link} from "react-router-dom";
class News extends React.Component{

    state={
        search: "",
        articles:[],
    }

      componentDidMount() {
        const {title} = this.props.match.params;

        if(title){
            this.setState({search:title});
            this.searchByTitle(title);
        }else {
            this.searchAll();
        }
     }


     componentDidUpdate(prevProps, prevState, snapshot) {
        const {title} = prevProps.match.params;
        const newTitle =  this.props.match.params.title;
        if(title !== this.props.match.params.title){
            this.setState({search: newTitle})
            this.searchByTitle(newTitle)
        }
     }

    searchAll = () => {
        newsService.fetchAllNews(30).then(data =>
            this.setState({articles: data.articles}))
    }

    searchByTitle = (title) =>{
        newsService.fetchByTitle(title).then( data =>
            this.setState({articles: data.articles}))
    }

    render() {
        return (
            <div className="news-page-container d-flex flex-column  m-auto ">
                <div className="w-50 d-flex flex-column m-auto">
                <input type="text" className="news-search form-control mt-3"
                       placeholder="Search..."
                       value={this.state.search}
                       onChange={(e)=> this.setState({search:e.target.value})}/>
                <Link to={`/news/${this.state.search}`} className="form-control">Submit</Link>
                </div>
                <div className="news-list ">

                    {this.state.articles.map(a =>
                        <NewsCard key={a.id} article={a}/>)}
                </div>

            </div>
        )
    }
}

export  default News;
