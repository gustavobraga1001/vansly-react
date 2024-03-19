import React from 'react'
import Logo from '../../components/Logo'
import Loading from '../../components/Loading'
import './index.css'

const Home = () => {
  return (
    <div className='container'>
        <Logo />
        <Loading />

    </div>
  )
}

export default Home