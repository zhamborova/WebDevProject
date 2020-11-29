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
            <div className="news-search container d-flex flex-column">
                <NavBar/>

                <h1 className="ml-3">News</h1>
                    <div className="d-flex container  ">
                        <input className="form-control"
                               placeholder="Search news..."
                               value={this.state.search}
                               onChange={(e)=> this.setState({search:e.target.value})}/>
                        <Link to={`/news/${this.state.search}`} className="ml-3 w-25">
                            <button className="form-control search-btn ">Search</button></Link>
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
