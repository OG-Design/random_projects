import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.sass'


type Item = {
    label: string,
    price: number,
    checkmark: boolean
}

function List({}: Item) {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul className='list'>
        <h1>title</h1>
        <ul>
          <Item/>
        </ul>
      </ul>
    </>
  )
}

export default List
