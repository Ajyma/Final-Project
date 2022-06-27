import React from 'react'
import Layout  from './Layout/Layout'
import Card from "../../../../components/Main/Card";
import { Slider } from "../../../../components/Main/Slider/Slider";
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Chat from '../../../../components/Chat'
import FAQ from '../../../../components/FAQ'
import cls from './Layout/Layout.module.scss'
import { Comments } from '../../../../components/Comments';

const Main = () => {
  return (
    <>
      <Header/>
      <Layout>
        <Slider/>
        <div className={cls.container}>
          <div className={cls.row}>
            <Card/>
            <Comments/>
          </div>
        </div>
      </Layout>
      <FAQ/>
      <Chat/>
      <Footer/>
    </>
  )
}

export default Main