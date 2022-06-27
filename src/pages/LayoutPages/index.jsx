import React from 'react'
import { Routes, Route , useNavigate } from 'react-router-dom';
import * as LayoutPages from '../../apps/Layout/pages/'
import { MorePage } from '../../components/Main/More';
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
        <Route path='/basket' element={<LayoutPages.Basket/>}/>
        <Route path='/favorites' element={<LayoutPages.Favorites/>}/>
        <Route path='/admin' element={<LayoutPages.Admin/>}/>
        <Route path='/more/:id' element={<MorePage/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes