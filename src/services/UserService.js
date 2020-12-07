const url = "http://localhost:8080"

export const fetchAllUsers = () => {
    return fetch(`${url}/users`, {
        method: 'GET'
    })
        .then(response => response.json())
}

export const fetchUserById = (userId) => {
    console.log(userId)
    return fetch(`${url}/users/${userId}`, {
        method: 'GET'
    })
        .then(response => {
            response.json()
            console.log(response)
        })

}

export const updateUser = (user) => {
    console.log("UPDATING USER")
    console.log(user)
    return fetch(`${url}/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteUser = (user) => {
    return fetch(`${url}/users/${user.id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

export const createUser = (user) => {
    return fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export default {
    fetchAllUsers,
    fetchUserById,
    updateUser,
    deleteUser,
    createUser
}
