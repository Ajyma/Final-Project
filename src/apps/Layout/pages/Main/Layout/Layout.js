import React from "react";
import Card from "../../../../../components/Main/Card/Card";
import { Slider } from "../../../../../components/Main/Slider/Slider";
import cls from './Layout.module.scss'
import {BsArrowDown} from 'react-icons/bs'
import {getAllCards} from '../../../../../api/'

export const Layout = () => {
  const [data , setData] = React.useState(null)

  React.useEffect(() => {
    // setData(getAllCards())
    getAllCards().then(res => console.log(res))
  }, [])
  
  if(!data) return <p>Loading...</p>

  return (
    <div className={cls.layout}>
      <Slider/>

      <div className={cls.container}>
        <div className={cls.row}>
          {
            data?.map(item => <Card key={item.id} base ={item}/>)
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