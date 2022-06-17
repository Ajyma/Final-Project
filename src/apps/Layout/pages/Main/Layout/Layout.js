import React from "react";
import Card from "../../../../../components/Main/Card/Card";
import { getProduct } from "../../../../../components/DB";
import { Slider } from "../../../../../components/Main/Slider/Slider";
import cls from './Layout.module.scss'
import {BsArrowDown} from 'react-icons/bs'

export const Layout = () => {
  const [data , setData] = React.useState(null)

  React.useEffect(() => {
    setData(getProduct())
  }, [])
  
  if(!data) return <p>Loading...</p>

  return (
    <div className={cls.layout}>
      <Slider/>

      <div className={cls.container}>
        <div className={cls.row}>
        {
          data.map(item => <Card key={item.id} base ={item}/>)
        }
        </div>      
      </div>

      <div className={cls.more}>
        <div className={cls.text}>
          <p>Еще</p>
          <p><BsArrowDown/></p>
        </div>
      </div>
    </div>
  )
}