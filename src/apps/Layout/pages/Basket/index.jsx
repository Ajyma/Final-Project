import React from 'react'
import Navbar from '../../../../components/Header/Navbar/Navbar'
import { useMediaQuery } from 'react-responsive'
import IsMobile from '../../../../components/Header/IsMobile'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import cls from './Basket.module.scss'

const Basket = () => {

  const navigate = useNavigate()

  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)"
  })
  return (
    <React.Fragment>
      {
        isMobile && (
          <>
            <IsMobile/>
            <h2>Корзина</h2>
          </>
        )
      }
      {
        isTablet && (
          <>
            <Navbar/>
            <div className={cls.headerBlock}>
              <div className={cls.goBack} onClick={() => navigate('/')}>
                <IoMdArrowBack/>
              </div>
              <h1>Корзина</h1>
            </div>
          </>
        )
      }
    </React.Fragment>
  )
}

export default Basket