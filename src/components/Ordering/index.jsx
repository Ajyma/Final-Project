// Появится если человек зарегистрирован
import React from "react";
import cls from './Order.module.scss'

export const Order = () => {
    return (
        <div className={cls.container}>
            <div className={cls.row}>
                <h1>Оформление заказа</h1>
                <div>
                    <p>Ваши данные</p>
                    <div className={cls.infoAboutBuyer}>
                        <div className={cls.info}>
                            <input placeholder="ФИО" ></input>
                        </div>
                        <div className={cls.info}>
                            <input placeholder="ФИО" ></input>
                        </div>
                        <div className={cls.info}>
                            <input placeholder="ФИО" ></input>
                        </div>
                        <div className={cls.info}>
                            <input placeholder="ФИО" ></input>
                        </div>
                    </div>
                    <button className={cls.submit}>регистрация</button>
                </div>
                <div>
                    <h1>Способы оплаты</h1>
                    <ul typeof="circle">
                        <li>Банковская карта </li>
                        <li>Оплата при получении</li>
                    </ul>
                </div>
                
            </div>
            <button className={cls.submit}>Подтвердить</button>
        </div>
    )
}