import React, { useState } from 'react'

import '../App.sass'

import ListComponent from '../List/ListComponent'

function MainColumn() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <main id='MainColumn'>
            <ListComponent title='List title' content={[
              {content: 'Bread', cost: 30, checked: true},
              {content: 'Butter', cost: 30, checked: false},
              {content: 'Ketchup', cost: 40, checked: false}
            ]}/>
      </main>
    </>
  )
}

export default MainColumn
