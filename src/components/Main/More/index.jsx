import React from "react";
import { useParams } from 'react-router-dom';
import cls from './More.module.scss'
import {MdOutlineArrowBack} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { getCards, getSingleCard} from "../../../api";

export const MorePage = () => {
    const {id} = useParams()

    const data = getCards().find(item => item.id == id )
    return (
        <div className={cls.moreCard}>
            <div>
                <h1>{data.name}</h1>
            </div>

            <div className={cls.leftBlock}>
                <div className={cls.imgBlock}>
                    <img className={cls.image} src={data.url} alt="" />
                </div>
                <div className={cls.info}>
                    <div>
                        <p>Cost:{data.price}</p>
                    </div>
                    <div className={cls.size}>
                        <p>Size:</p>
                        <div className={cls.sizeBtn}>
                            <div className={cls.btn}>
                                <button >S</button>
                            </div>
                            <div className={cls.btn}>
                                <button >M</button>
                            </div>
                            <div className={cls.btn}>
                                <button >L</button>
                            </div>
                            <div className={cls.btn}>
                                <button >XL</button>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <p>Описание:</p>
                    </div>

                    <div className={cls.icons}>
                        <button className={cls.iconBtn}>В корзину</button>
                        <button className={cls.iconBtn}>Купить сейчас</button>
                    </div>

                    <div className={cls.feedback}>
                        <p>Отзывы:</p>
                    </div>
                </div>
            </div>

            <Link to={'/'} className={cls.back}><MdOutlineArrowBack/></Link>
        </div>
    )
}
