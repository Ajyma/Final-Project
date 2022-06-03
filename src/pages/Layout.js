import React from "react";
import Card from "../components/Card/Card";
import { getProduct } from "../components/DB";
import { Slider } from "../components/Slider/Slider";
import cls from './Layout.module.scss'
import {BsArrowDown} from 'react-icons/bs'

export const Layout = () => {
    return (
        <div className={cls.layout}>
            <Slider/>

            <div className={cls.container}>
                <div className={cls.row}>
                {/* {
                    CardList.map(item => {
                    // <Card key={item.id} image={item.image}/>
                    // <Card/>
                    
                    })
                } */}
                {
                            getProduct().map(item => <Card key={item.id} base = {item}/>)
                }
                </div>    
            </div>

            <div className={cls.more}>
                <div className={cls.text}>
                    <p>Еще</p>
                    <p><BsArrowDown/></p>
                </div>
            </div>

        </div>
    )
}