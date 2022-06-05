import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineShopping } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import Profile from '../../../utils/List/ProfileTablet'
import List from '../../../utils/List'
import { useNavigate } from 'react-router-dom'
import cls from './Navbar.module.scss'

const Navbar = () => {
  const navigate = useNavigate()

  const [isToggle, setIsToggle] = React.useState(false)
  const [isToggleProfile, setIsToggleProfile] = React.useState(false)
  const toggle = () => setIsToggle(prev => !prev)
  const toggleProfile = () => setIsToggleProfile(prev => !prev)

  return (
    <div className={cls.navbarTablet}>
      <div>
        <GiHamburgerMenu onClick={toggle} className={cls.bars}/>
        <List isToggle={isToggle} toggle={toggle}/>
      </div>
      <div>
        <AiOutlineSearch className={cls.searchIcon}/>
        <input type="text" placeholder='Поиск' className={cls.searchInput}/>
        <span>
          <CgProfile onClick={toggleProfile}/>
          <Profile isToggle={isToggleProfile} toggle={toggleProfile}/>
        </span>
        <span><AiOutlineHeart onClick={() => navigate('/favorites')}/></span>
        <span><AiOutlineShopping onClick={() => navigate('/basket')}/></span>
      </div>
    </div>
  )
}

export default Navbar