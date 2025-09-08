import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.sass'
function TopMenu() {
  const [count, setCount] = useState(0)

  return (
    <>
        <menu id='TopMenu'>
            <button><img src="#" alt="friends button"/></button>
        </menu>
    </>
  )
}

export default TopMenu
