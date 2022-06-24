import React from "react";
import {BsHeart , BsHeartFill} from 'react-icons/bs'
import {RiShoppingCart2Line ,RiShoppingCart2Fill} from 'react-icons/ri'
import { Link } from "react-router-dom";
import { getCards, getSingleCard, setFavourites } from "../../../../../api";
import cls from './Layout.module.scss'
import { Comments } from "../../../../../components/Comments";

export const Layout = () => {
  const [cards, setCards] = React.useState(null)
  const [text , setText] = React.useState('work')
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
  }, [updateUseEffect, text])

  if(!cards) return <p>Loading...</p>

  

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

  return (
    <div className={cls.layout}>
      <div className={cls.container}>
        <div className={cls.row}>
          {
            cards?.map(({name, price, category, basket, favorite, url, id}) => {
              return (
                <div className={cls.card} key={id}>
                  <div className={cls.cardImg}>
                    <img 
                      src={url} 
                      className={cls.image} 
                      alt=""
                    />
                  </div>
                  <div className={cls.cardBody}>
                    <p className={cls.price}>{price}$</p>
                    <p className={cls.cardTitle}>{name}</p>
                    
                    <div className={cls.url}>
                      <Link to={`/cards/${id}`} className={cls.btnMore}>Подробнее </Link>
                      <ul className={cls.iconList}>
                        <li 
                          className={cls.like} 
                          onClick={() => toggle(id ,favorite )}
                        >
                          {favorite ? <BsHeartFill/> : <BsHeart/>}
                        </li>
                        <li>
                          {!basket ? <RiShoppingCart2Fill/> : <RiShoppingCart2Line/>}
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>      
      </div>
      <Comments/>
    </div>
  )
}