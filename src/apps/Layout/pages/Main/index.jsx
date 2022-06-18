import React from 'react'
import { Layout } from './Layout/Layout'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Chat from '../../../../components/Chat'
import FAQ from '../../../../components/FAQ'

const Main = () => {
  return (
    <>
      <Header/>
      <Layout/>
      <FAQ/>
      <Chat/>
      <Footer/>
    </>
  )
}

export default Main