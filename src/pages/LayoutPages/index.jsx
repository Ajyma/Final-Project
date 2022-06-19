import React from 'react'
import { Routes, Route , useNavigate } from 'react-router-dom';
import * as LayoutPages from '../../apps/Layout/pages/'
import Basket from './Basket/index'
import Favorites from './Favorites/index'
import { useAuth } from '../../providers/useAuth';

const LayoutRoutes = () => {
  const { users } = useAuth()

  const navigate = useNavigate()

  React.useEffect(() => {
    users && navigate('/')
  }, [users])

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LayoutPages.Main/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/favorits' element={<Favorites/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes