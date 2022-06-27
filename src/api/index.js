import { API } from "./api"

export const getCards = () => API.get(`cards/`)

export const createCard = data => {
  return API.post('cards', data)
}


export const setFavourites = (cardId , data) => API.patch(`cards` , cardId , data)

export const getSingleCard = (id) => API.getSingleCard(`cards` , id )
export const getMessages = () => API.get('messages/')
export const getComments = () => API.get('comments/')


export const postMessage = data => {
  return API.post('messages', data)
}


export const postComment = data => API.post('comments' , data)