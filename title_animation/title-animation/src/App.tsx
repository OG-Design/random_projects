import { useState } from 'react'
import './App.sass'

import Header from './Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="Olsen-Graphics"/>
    </>
  )
}

export default App
