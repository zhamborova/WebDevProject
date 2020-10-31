

const fetchNews = () => {
var url = 'http://newsapi.org/v2/everything?' +
    'q=Climate&' +
    'from=2020-10-30&' +
    'sortBy=relevancy&' +
    'apiKey=5f1246674c184e60bb9e88f19186b8b3&' +
    'pageSize=10';

var req = new Request(url);

    return fetch(req)
    .then(response => response.json())

}

export default {
    fetchNews
}
