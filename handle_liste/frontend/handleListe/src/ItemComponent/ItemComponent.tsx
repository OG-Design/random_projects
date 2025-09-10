import React, { useState } from 'react'

import '../App.sass'
type ItemComponentProps = {
    checked?: boolean
}
function ItemComponent({checked = false }: ItemComponentProps) {
  const [count, setCount] = useState(0)

  return (
    <>
      <li className='item'>
        <button className={`item_check${checked ? 'ed': ''}`}>
            ✓
        </button>
        <div className='item_right'>
            <div className='item_text'>Some item</div>
        </div>
      </li>
    </>
  )
}

export function ItemComponentChecked() {
    return <ItemComponent checked={true}/>;
}

export default ItemComponent

