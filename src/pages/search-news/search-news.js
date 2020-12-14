import React from 'react';
import NewsCard from "../../components/news-card/news-card";
import newsService from '../../services/news-service'
import './search-news.css'
import {Link} from "react-router-dom";
import {NavBar} from "../../components/navbar/navbar";
class SearchNews extends React.Component{

    state={
        search: "",
        articles:[],
    }

      componentDidMount() {
        const {search} = this.props.match.params;

        if(search){
            this.setState({search:search});
            this.searchByTitle(search);
        }else {
            this.searchAll();
        }
     }


     componentDidUpdate(prevProps, prevState, snapshot) {
        const {search} = prevProps.match.params;
        const newTitle =  this.props.match.params.search;
        if(search !== newTitle){
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
            <div className="news-search container d-flex flex-wrap">

                <h1 className="ml-3">News</h1>
                    <div className="d-flex container">
                        <input className="form-control"
                               placeholder="Search news..."
                               value={this.state.search}
                               onChange={(e)=> this.setState({search:e.target.value})}/>
                        <Link to={`/search-news/${this.state.search}`} className="ml-3">
                            <button className="form-control search-btn flex-grow">Search</button></Link>
                    </div>
                <div className="news-list">

                    {this.state.articles.map(a =>
                        <NewsCard key={a.id} article={a}/>)}
                </div>

            </div>
        )
    }
}

export  default SearchNews;
