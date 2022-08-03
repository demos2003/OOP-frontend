import React from 'react'
import { Header } from '../Components/Header'
import Centers from '../Components/EventCenters'
import { Footer } from '../Components/Footer'
import {Main} from '../Components/Main'

const Landing = () => {
  return (
    <div className='body'>
    <Header/>
    <Main/>
    <Centers/>
    <Footer/>
   
    </div>
  )
}

export default Landing