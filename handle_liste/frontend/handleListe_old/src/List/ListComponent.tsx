import React, { useState } from 'react'

import '../App.sass'

import ItemComponent, {ItemComponentChecked} from '../ItemComponent/ItemComponent';

// class Item {
//   content: string
//   cost: number
//   checked?: boolean
//   constructor(content: string, cost: number, checked?: boolean) {
//     this.content = content
//     this.cost = cost
//     if(checked){
//       this.checked = checked
//     } else {
//       this.checked = false
//     }
//   }
// }

type ItemType = {
  name: string
  cost: number
  checked?: boolean
}

export type ListComponentProps = {
  title?: string
  content?: string
}



function ListComponent({title, content}: ListComponentProps) {
  const [count, setCount] = useState(0)

  

   

  // let items = [
  //   new Item('Bread', 30, true),
  //   new Item('Butter', 80),
  //   new Item('Ketchup', 40)
  // ]

  return (
    <>
      <ul className='ListComponent'>
        <div className='list_title'>
            <input placeholder={title? title : ''}></input>

        </div>
        <ul className='item_area'>
          {
            // content(checks undefined) && content.map
            content && content.map((item, idx) => (
              <ItemComponent key={idx} content={item.name} checked={item.checked} cost={item.cost}/>
            ))
          }
        </ul>
      </ul>
    </>
  )
}


export default ListComponent
