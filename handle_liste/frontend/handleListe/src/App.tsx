import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'

import Header from './Header'
import Column from './Column'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Column/>
    </>
  )
}

export default App
