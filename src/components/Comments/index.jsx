import React from "react";
import cls from './Comments.module.scss'
import {AiOutlineLike , AiOutlineDislike} from 'react-icons/ai'
import { useAuth } from "../../providers/useAuth";

export const Comments = () => {
    const {users} = useAuth()

    return ( 
        <div className={cls.CommentsBlock}>
            <div className={cls.user}>
                <div className={cls.profile}>
                    <img src={users.photo} className={cls.image}/>
                </div>
                <p>{users.name}</p>
            </div>
            <div className={cls.text}>
                <input type="text" placeholder="Оставить комментарий" className={cls.com}/>
            </div>
        </div>
    )
}