import React from 'react'
import Navbar from '../../components/Header/Navbar/Navbar'
import { useMediaQuery } from 'react-responsive'
import IsMobile from '../../components/Header/IsMobile'
import cls from './Basket.module.scss'

const Basket = () => {
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
            <h1>Корзина</h1>
          </>
        )
      }
    </React.Fragment>
  )
}

export default Basket