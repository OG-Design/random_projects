import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'

type ParagraphProp = {
    content?:string
}

type CardProp = {
    title?: string
    example?: string
    paragraph?: string[]

}

function Card({title, paragraph, example}: CardProp) {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='card'>
        <h1>{title}</h1>
        {example && <p className='example'><pre><code>{example}</code></pre></p>}
        {paragraph?.map((para, i)=>(
            <p key={i}>
                {para}
            </p>
        ))}
      </section>
    </>
  )
}

export default Card
