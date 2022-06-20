import React from "react";
import {BsHeart} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { Slider } from "../../../../../components/Main/Slider/Slider";
import {BsArrowDown} from 'react-icons/bs'
import { getCards } from "../../../../../api";
import cls from './Layout.module.scss'

export const Layout = () => {
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
  }, [updateUseEffect])

  if(!cards) return <p>Loading...</p>

  console.log(cards);

  return (
    <div className={cls.layout}>
      <Slider/>

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
                      <Link to={`cards/${id}`} className={cls.btnMore}>Подробнее </Link>
                      <ul className={cls.iconList}>
                        <li><BsHeart/></li>
                        <li><AiOutlineShoppingCart/></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>      
      </div>
    </div>
  )
}