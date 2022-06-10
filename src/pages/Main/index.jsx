import React from 'react'
import { Layout } from './Layout/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Chat from '../../components/Chat'

const Main = () => {
  return (
    <>
      <Header/>
      <Layout/>
      <Chat/>
      <Footer/>
    </>
  )
}

export default Main