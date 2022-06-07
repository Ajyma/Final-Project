import React , {useMedisQuery} from "react";
import cls from './Card.module.scss'
import {BsHeart} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom";

function Card({base}){
    return (
        <div className={cls.card}>
            <div className={cls.cardImg}>
                <img src={base.url} className={cls.image}/>
            </div>
            <div className={cls.cardBody}>
                <p className={cls.price}>{base.price}$</p>
                <p className={cls.cardTitle}>{base.title}</p>
                
                <div className={cls.url}>
                    <Link to={`/product/${base.id}`} className={cls.btnMore}>Подробнее </Link>
                    <ul className={cls.iconList}>
                        <li><BsHeart/></li>
                        <li><AiOutlineShoppingCart/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;