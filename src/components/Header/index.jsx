import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import { AiOutlineSearch } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
import '../Header/Header.scss'
import List from './List'
import Search from './Search'

const Header = () => {
  const [isToggle, setIsToggle] = React.useState(false)
  const [isSearch, setIsSearch] = React.useState(false)
  const toggleNav = () => setIsToggle(prev => !prev)
  const toggleSearch = () => setIsSearch(prev => !prev)
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })
  const isDekstop = useMediaQuery({
    query: "(min-width: 1024px)"
  })
  return (
    <React.Fragment>
      {
        isMobile && (
          <div className='navbar'>
            <nav>
              <div className='bars'><GoThreeBars onClick={toggleNav}/></div>
              <h1>LOGO</h1>
              <div className='searchIcon'><AiOutlineSearch onClick={toggleSearch}/></div>
            </nav>
            <List isToggle={isToggle} toggleNav={toggleNav} />
            <Search isSearch={isSearch} toggleSearch={toggleSearch}/>
          </div>
        )
      }
      {
        isDekstop && (
          <div className='navbar'>
            <nav>
              <h1>LOGO</h1>
              <AiOutlineSearch className='iconSearchInput'/>
              <input type="text" placeholder='Я ищу...' className='searchInput nav' />
            </nav>
          </div>
        )
      }
    </React.Fragment>
  )
}

export default Header