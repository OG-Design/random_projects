import React, { useState } from 'react'

import '../App.sass'

import {ItemComponent, ItemComponentChecked} from '../ItemComponent/ItemComponent';

function ListComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul className='ListComponent'>
        <div className='list_title'>
            <h1>Title</h1>

        </div>
        <ul className='item_area'>
            <ItemComponent/>
            <ItemComponentChecked/>
        </ul>
      </ul>
    </>
  )
}

export default ListComponent
