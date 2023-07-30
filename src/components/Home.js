import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/style.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <h1>Hello and welcome to the home page !!!</h1>
      <button onClick={()=>navigate('/')} className='signout'>Sign Out</button>
    </div>
  )
}

export default Home
