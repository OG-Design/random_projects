
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

  return (
    <>
        {link.map((item, index) => (
          <li className='card' key={index}>
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
