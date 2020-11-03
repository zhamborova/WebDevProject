import React from 'react';
import './news-card.css'

const NewsCard = ({article}) =>
    <a href={article.url} > <div className="card  card-news" style={{width: "18rem",
        background: `url(${article.urlToImage})`}} key={article.id}>
        {console.log(article)}
        <div className="card-body d-flex">
            <div className=" card-title-container">
               <p  className="card-title">{article.title} </p>
            </div>
        </div>
    </div>
        </a>


export default NewsCard;
