const url = "http://localhost:8080"

export const register = (user) =>
    fetch(`${url}/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const login = (user) =>
    fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

