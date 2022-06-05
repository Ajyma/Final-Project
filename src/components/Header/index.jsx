import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from './Navbar/Navbar'
import '../Header/Header.scss'
import IsMobile from './IsMobile'

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)"
  })
  return (
    <React.Fragment>
      {
        isMobile && (<IsMobile/>)
      }
      {
        isTablet && (
          <>
            <Navbar/>
            <div className='headerTablet'>
              <div className="block">
                <div className='first_block'>
                  <img src="https://images.unsplash.com/photo-1573766713733-18f875c7892d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" alt="" />
                  <h1>Добро пожаловать в <span>Logo</span></h1>
                  <p>
                    Экономим Ваше время!
                    <br />
                    Предлагаем лучшие цены!
                  </p>
                </div>
                <div className='second_block'>
                  <img src="https://blog.comfy.ua/wp-content/uploads/2019/10/foto8-768x512.jpg" alt="" />
                </div>
              </div>
            </div>
          </>
        )
      }
    </React.Fragment>
  )
}

export default Header