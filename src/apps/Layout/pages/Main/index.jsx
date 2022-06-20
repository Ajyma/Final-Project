import React from 'react'
import { Layout } from './Layout/Layout'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Chat from '../../../../components/Chat'
import FAQ from '../../../../components/FAQ'
import { Slider } from '../../../../components/Main/Slider/Slider'
import { Comments } from '../../../../components/Comments'

const Main = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <Layout/>
      <Comments/>
      <FAQ/>
      <Chat/>
      <Footer/>
    </>
  )
}

export default Main