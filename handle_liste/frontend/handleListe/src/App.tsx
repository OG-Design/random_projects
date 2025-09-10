import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'
import FriendsComponent from './friends/FriendsComponent.tsx';
import TopMenu from './topMenu/TopMenu.tsx'
import MainColumn from './MainColumn/MainColumn.tsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopMenu/>
      <MainColumn/>      
    </>
  )
}

export default App
