import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'

import Card from './components/Card'

import dataRaw from './links.json'


function App() {
  const [count, setCount] = useState(0)

  // If dataRaw is a JSON string, parse it; otherwise, use as is
  const linksData = typeof dataRaw === 'string' ? JSON.parse(dataRaw) : dataRaw;

  return (
    <>
      <main>
        <section>
          <h1>Shortcuts</h1>
          
          <div className='spacer-br'></div>
          <br />
          <div id='links'>
          <Card link={linksData} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
