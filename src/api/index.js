import { API } from "./api"

export const getCards = userId => API.get(`cards/${userId}`)