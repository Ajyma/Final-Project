import React from "react";
import cls from './Layout.module.scss'
import { Comments } from "../../../../../components/Comments";

const Layout = ({children}) => {
  return (
    <div className={cls.layout}>
      {children}
    </div>
  )
}
export default Layout