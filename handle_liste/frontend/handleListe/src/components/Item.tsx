import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.sass'


type Item = {
    label: string,
    price: number,
    checkmark: boolean
}

function Item({}: Item) {
    const [count, setCount] = useState(0)

    return (
        <>
            <ul className='item'>
            <button className='checkmark'></button>
            <input className='label' type="text"/>
            <input className='price' type="number"/>

            </ul>
        </>
    )
}

export default Item
