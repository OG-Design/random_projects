import { useEffect, useState } from 'react'
import './App.sass'


type header = {
    title: string
}



function readyUpAnimation(header: header) {

    const chars = header.title.split('');
    return (
            <span className='animation_container'>{
                chars.map( (ch, idx) => (
                    <div key={idx} className='char_animated blur-text' data-char={ch}>{ch}</div>
                ))
            }</span>
        );
}

function Header(title: header) {
  const [count, setCount] = useState(0)

  return (
    <>
        <header id="header">{readyUpAnimation(title)}</header>
    </>
  )
}

export default Header
