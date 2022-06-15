import React from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

const Profile = ({isToggle, toggle}) => {
  const navigate = useNavigate()
  return (
    <div className={isToggle ? 'mob-menuProfile active' : 'mob-menuProfile'}>
      <span onClick={toggle} className='close'>&times;</span>
      <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
      <p>Name</p>
      <h4 onClick={() => navigate('/auth/login')}>
        <span>
          <VscSignOut/> 
        </span>
        Выйти
      </h4>
    </div>
  )
}

export default Profile;