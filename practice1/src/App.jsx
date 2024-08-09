import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Navbar from './Component/Navbar'
import NewsItem from './Component/NewsItem'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <NewsItem />
    </>
  )
}

export default App
