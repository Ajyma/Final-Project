import React from "react";
import { getProduct } from "../../../DB";
import { Slider } from "../../../components/Main/Slider/Slider";
import cls from './Layout.module.scss'
import {BsArrowDown} from 'react-icons/bs'
import Card from "../../../components/Main/Card/Card";

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
            getProduct().map(item => <Card key={item.id} base = {item}/>)
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