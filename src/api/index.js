import { API } from "./api"

export const getCards = () => API.get(`cards/`)
export const getC = userId => API.get(`cards/${userId}`)