import React from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

const ProfileTablet = ({isToggle, toggle}) => {
  const navigate = useNavigate()
  return (
    <div className={isToggle ? 'tabletProfile active' : 'tabletProfile'}>
      <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
      <p>Name</p>
      <hr />
      <h4 onClick={() => navigate('/auth/login')}>
        <span>
          <VscSignOut/> 
        </span>
        <span>
          Выйти
        </span>
      </h4>
    </div>
  )
}

export default ProfileTablet