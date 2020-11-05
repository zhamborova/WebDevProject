

const fetchAllNews = (size) => {
var url = 'https://newsapi.org/v2/everything?' +
    'q=environment&' +
    'from=2020-10-30&' +
    'sortBy=relevancy&' +
    'apiKey=5f1246674c184e60bb9e88f19186b8b3&' +
    `pageSize=${size}`;

    var myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');

    var myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' };
var req = new Request(url, myInit);
    return fetch(req)
    .then(response => response.json())

}

const fetchByTitle = (title) => {
    var url = 'https://newsapi.org/v2/everything?' +
        `q=${title}&` +
        'from=2020-10-30&' +
        'sortBy=relevancy&' +
        'apiKey=5f1246674c184e60bb9e88f19186b8b3&' +
        `pageSize=100`;


    var myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');

    var myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' };
    var req = new Request(url, myInit);


    return fetch(req)
        .then(response => {
            return response.json()})

}

export default {
   fetchAllNews,
    fetchByTitle
}
