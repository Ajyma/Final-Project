import React from "react";
import Card from "../../../../../components/Main/Card/Card";
import { Slider } from "../../../../../components/Main/Slider/Slider";
import cls from './Layout.module.scss'
import {BsArrowDown} from 'react-icons/bs'
import {getAllCards, getC, getCards} from '../../../../../api/'

export const Layout = () => {
  const [data , setData] = React.useState(null)

  React.useEffect(() => {
    // setData(getAllCards())
    // setData(getCards())
    getCards().then(res => console.log(res))
  }, [])

  // const get = React.useCallback(() => {
  //   getC(users)
  // })
  
  if(!data) return <p>Loading...</p>

  return (
    <div className={cls.layout}>
      <div className={cls.container}>
        <div className={cls.row}>
          {
            data?.map(item => <Card key={item.id} base ={item}/>)
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