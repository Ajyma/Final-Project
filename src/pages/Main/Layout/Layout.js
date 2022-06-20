import React from "react";
import { Slider } from "../../../components/Main/Slider/Slider";
import cls from './Layout.module.scss'
import {BsArrowDown} from 'react-icons/bs'
import Card from "../../../components/Main/Card/Card";
import { getCards } from "../../../api";

export const Layout = () => {
  const [data , setData] = React.useState(null)

  React.useEffect(() => {
    setData(getCards())
  }, [])
  
  if(!data) return <p>Loading...</p>

  return (
    <div className={cls.layout}>
      <Slider/>

      <div className={cls.container}>
        <div className={cls.row}>
          {
            data.map(item => <Card key={item.id} base = {item}/>)
          }
        </div>      
      </div>


      

      <div className={cls.more}>
        <div className={cls.text}>
          <div className={cls.textMore}>
            <p><BsArrowDown/></p>
          </div>
        </div>
      </div>
    </div>
  )
}