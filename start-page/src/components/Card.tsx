import { useState } from 'react'

type links = {
  link: string,
  img: string,
  alt?: string,
  title?: string,
}

type CardProps = {
  link: links[],
}

function Card({link}: CardProps) {
  const [count, setCount] = useState(0)

  return (
    <>
        {link.map((item, index) => (
          <li className='card' key={item.img}>
            <a href={item.link}>
            <img src={item.img} alt={item.alt} />
            <h3>{item.title}</h3>
            </a>
          </li>
        ))}
    </>
  )
}

export default Card
