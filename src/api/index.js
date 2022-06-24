import { API } from "./api"

export const getCards = () => API.get(`cards/`)

export const createCard = data => {
  return API.post('cards', data)
}


export const setFavourites = (cardId , data) => API.patch(`cards` , cardId , data)

export const getSingleCard = (id) => API.getSingleCard(`cards` , id )