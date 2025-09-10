import React, { useState } from 'react'

import '../App.sass'

import ListComponent from '../List/ListComponent'

function MainColumn() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main id='MainColumn'>
            <ListComponent/>
      </main>
    </>
  )
}

export default MainColumn
