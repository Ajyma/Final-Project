const BASE_URL = 'https://final-project-7cd43-default-rtdb.asia-southeast1.firebasedatabase.app'

export const API = {
  get: (endPoint) => {
    return fetch(`${BASE_URL}/${endPoint}.json`, {
      method: 'GET',
      headers: {
        'Content-type' : 'application/json'
      }
    }).then(r => r.json())
  },

  getSingleCard: (endPoint , id) => {
    return fetch(`${BASE_URL}/${endPoint}/${id}.json`, {
      method: 'GET',
      headers: {
        'Content-type' : 'application/json'
      }
    }).then(r => r.json())
  },
  post: (endPoint, data) => {
    fetch(`${BASE_URL}${endPoint}.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type' : 'application/json'
      }
    }).then(r => r.json())
  },
  patch: (endPoint,cardId ,  data) => {
    return fetch(`${BASE_URL}/${endPoint}/${cardId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type':'application/json'
      }
    })
    .then(res => res.json())
  },

  delete: endPoint => {
    return fetch(`${BASE_URL}${endPoint}`, {
      method:'DELETE',
      headers: {
        'Content-type':'application/json'
      }
    })
  }
}

