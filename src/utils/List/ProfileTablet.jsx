import React from 'react'
import { handleSignOut } from '../../firebase'
import { useAuth } from '../../providers/useAuth'
import { VscSignOut } from 'react-icons/vsc'

const ProfileTablet = ({isToggle, toggle}) => {
  const { users } = useAuth()

  return (
    <div className={isToggle ? 'tabletProfile active' : 'tabletProfile'}>
      <img src={users.photo} alt="" />
      <p>{users.name}</p>
      <hr />
      <h4 onClick={handleSignOut}>
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