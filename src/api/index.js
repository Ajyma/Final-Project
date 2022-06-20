import { API } from "./api"

export const getCards = () => API.get(`cards/`)

export const createCard = data => {
  return API.post('cards', data)
}