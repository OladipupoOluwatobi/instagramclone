import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Status from './components/Status'
import Below from './components/Below'




const App = ()=> {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header />
      <Status /> */}
      <Header/>
      <Status/>
      <Below/>
    </>
  )
}

export default App
