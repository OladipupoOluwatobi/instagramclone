import React from 'react'
import Header from './components/header/Header'
import Status from './components/status/Status'
import './App.css'
import Conic from './coniclearn/Conic'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Status />
      <Conic />
    </div>
  )
}

export default App