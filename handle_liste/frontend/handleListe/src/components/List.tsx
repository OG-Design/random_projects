import { useState } from 'react'
import '../App.sass'
import Item from './Item'
import type { listProps } from '../types/list'
import type { item } from '../types/item'

function List({ title, items, onAddItem, onItemChange }: listProps) {
  const handleClick = () => onAddItem()

  // render list
  return (
    <>
      <ul className='list'>
        <h1>{title}</h1>
        <ul>
          {/* render items */}
          {items.map((it: item, index: number) => {
            
            return (
              <Item 
              key={it.id ?? index} 
              label={it.label} 
              price={it.price} 
              marked={it.marked} 
              id={it.id} 
              onChange={onItemChange}/>
            )
          })}
          <button onClick={handleClick}>Add item</button>
        </ul>
      </ul>
    </>
  )
}

export default List
