const url = "https://evening-cliffs-15769.herokuapp.com"

const fetchAllNews = (size) => {
       return  fetch(`${url}/news`,
             {
                 method: "GET"
             }).then( response => response.json())
}

const fetchByTitle = (title) => {
    return fetch(`${url}/news/${title}`,
        {
            method: "GET"
        }).then( response => response.json())

}

export default {
   fetchAllNews,
    fetchByTitle
}
