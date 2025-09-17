import { useState } from 'react'
import './App.sass'

import Checkmark from './components/Checkmark'

function Column() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Checkmark marked={false}/>
      </section>
    </>
  )
}

export default Column
