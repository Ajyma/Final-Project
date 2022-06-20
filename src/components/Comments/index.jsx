import React from "react";
import cls from './Comments.module.scss'
import {AiOutlineLike , AiOutlineDislike} from 'react-icons/ai'

export const Comments = () => {
    return ( 
        <div className={cls.CommentsBlock}>
            <div className={cls.user}>
                <p>Text</p>
            </div>
            <div className={cls.text}>
                <input type="text" placeholder="comments..." className={cls.com}/>
            </div>
            <div className={cls.likes}>
                <button><AiOutlineLike/></button>
                <button><AiOutlineDislike/></button>
            </div>
        </div>
    )
}