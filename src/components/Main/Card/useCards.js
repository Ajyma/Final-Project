import React from 'react'
import { getCards, getSingleCard, setFavourites} from "../../../api/index";
import Loader from '../../Loader'

const useCards = () => {
  const [cards, setCards] = React.useState(null)
  const [updateUseEffect, setUpdateUseEffect] = React.useState(null)

  React.useEffect(() => {
    getCards()
    .then(res => {
      const data = res ? Object.entries(res).map(([id, rest]) => {
        return {
          id,
          ...rest
        }
      }) : []
      setCards(data)
    })

    getSingleCard()
    .then(res => {
      const date = res ? Object.entries(res).map(([id ,result]) => {
        return {
          id,
          ...result
        }
      }) : []
    })

  }, [updateUseEffect])

  if(!cards) return <Loader/>

  const toggle = (id, favorite) => {
    setFavourites
      (
      id,
      {
        favorite:!favorite
      }
      )
    .then(res => {
      console.log(res)
    })
  }


  return {
    cards
  }
}

export default useCards