import React from 'react'
import { IoWomanOutline } from 'react-icons/io5'
import { IoManOutline } from 'react-icons/io5'
import { MdChildCare } from 'react-icons/md'
import { GiConverseShoe } from 'react-icons/gi'

const List = ({isToggle, toggle}) => {
  return (
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

export default List