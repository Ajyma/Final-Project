import React from 'react'
import { handleSignOut } from '../../firebase'
import { useAuth } from '../../providers/useAuth'
import { VscSignOut } from 'react-icons/vsc'

const Profile = ({isToggle, toggle}) => {
  const { users } = useAuth()
  return (
    <div className={isToggle ? 'mob-menuProfile active' : 'mob-menuProfile'}>
      <span onClick={toggle} className='close'>&times;</span>
      <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
      <p>{users.name}</p>
      <h4 onClick={handleSignOut}>
        <span>
          <VscSignOut/> 
        </span>
        Выйти
      </h4>
    </div>
  )
}

export default Profile;