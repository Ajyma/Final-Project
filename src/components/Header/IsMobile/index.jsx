import React from 'react'
import cls from './IsMobile.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import FooterMobile from '../FooterMobile'

const isMobile = () => {
  return (
    <div className={cls.header}>
      <div className={cls.navbar}>
        <AiOutlineSearch className={cls.searchIcon}/>
        <input type="text" placeholder='Поиск' className={cls.searchInput} />
        <h1>Добро пожаловать в Logo</h1>
        <p>
          Экономим Ваше время!
          <br />
          Предлагаем лучшие цены!
        </p>
        <FooterMobile/>
      </div>
    </div>
  )
}

export default isMobile