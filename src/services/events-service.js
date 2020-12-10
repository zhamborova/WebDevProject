const url = `http://localhost:8080/events`


export const get_events = () => fetch(url).then(response => response.json())
export const get_event_by_id = (id) => fetch(`${url}/${id}`).then(response => response.json())

export const delete_event = (eventId) =>
    fetch(`${url}/${eventId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export const get_users_for_event = (ids, eventId) =>
    fetch(`${url}/${eventId}/users`, {
        method: 'POST',
        body: JSON.stringify(ids),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const create_event = (event) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const update_event = (event_id, new_event) =>
    fetch(`${url}/${event_id}`, {
        method: 'PUT',
        body: JSON.stringify(new_event),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export default {
    create_event, update_event, get_events, delete_event, get_users_for_event
}
