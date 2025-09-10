import React, { useState } from 'react'

import '../App.sass'
// used to state what data there is and wether or not it is checked
type ItemComponentProps = {
    checked?: boolean
    content?: string
    cost?: number
}

function ItemComponent({checked = false, content}: ItemComponentProps) {
  const [count, setCount] = useState(0)

  return (
    <>
      <li className='item'>
        {/* changes class based on checked if(checked=true){add ed to 'item_check'} */}
        <button className={`${checked ? 'item_checked': 'item_check'}`}>
            ✓
        </button>
        <div className='item_right'>
            <div className='item_text'>{content? content : ''}</div>
        </div>
      </li>
    </>
  )
}

export function ItemComponentChecked() {
    return <ItemComponent checked={true}/>;
}

export default ItemComponent

