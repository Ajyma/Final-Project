import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { BsTelephoneOutbound } from 'react-icons/bs'
import cls from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <h2>Соц сети</h2>
      <div className={cls.icons}>
        <span><FiFacebook/></span>
        <span><BsInstagram/></span>
        <span><CgMail/></span>
        <span><BsTelephoneOutbound/></span>
      </div>
      <div>
        <p>
          <FaRegCopyright/>
          2022
          All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer