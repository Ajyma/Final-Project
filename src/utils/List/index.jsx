import React from 'react'
import { IoWomanOutline } from 'react-icons/io5'
import { IoManOutline } from 'react-icons/io5'
import { MdChildCare } from 'react-icons/md'
import { GiConverseShoe } from 'react-icons/gi'
import { useMediaQuery } from 'react-responsive'


const List = ({isToggle, toggle}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)"
  })
  return (
    <>
      {
        isMobile && (
          <div className={isToggle ? 'mob-menu active' : 'mob-menu'}>
            <span onClick={toggle} className='close'>&times;</span>
            <ul className='list'>
              <li> <span><IoWomanOutline/></span> Женщинам</li>
              <li> <span><IoManOutline/></span> Мужчинам</li>
              <li> <span><MdChildCare/></span> Детям</li>
              <li> <span><GiConverseShoe/></span> Обувь</li>
            </ul>
          </div>
        )
      }
      {
        isTablet && (
          <div className={isToggle ? 'tablet-menu active' : 'tablet-menu'}>
            <span onClick={toggle} className='close'>&times;</span>
            <ul className='list'>
              <li> <span><IoWomanOutline/></span> Женщинам</li>
              <li> <span><IoManOutline/></span> Мужчинам</li>
              <li> <span><MdChildCare/></span> Детям</li>
              <li> <span><GiConverseShoe/></span> Обувь</li>
            </ul>
          </div>
        )
      }
    </>
  )
}

export default List