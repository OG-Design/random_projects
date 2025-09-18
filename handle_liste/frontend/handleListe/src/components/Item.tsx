import '../App.sass'
import type { item } from '../types/item'
import Checkmark from './Checkmark'
import type { ChangeEvent } from 'react'

type ItemChange = Partial<Pick<item, 'label' | 'price' | 'marked'>>
type ItemProps = item & {
  onChange: (id: item['id'], changes: ItemChange) => void
}

function Item({ id, label, price, marked, onChange }: ItemProps) {
  const onLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(id, { label: e.target.value })

  const onPriceChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(id, { price: e.target.valueAsNumber })

  const onToggleMarked = () =>
    onChange(id, { marked: !marked })

  return (
    <>
      <ul className='item'>
        <button onClick={onToggleMarked}>
          <Checkmark marked={marked} />
        </button>
        <input className='label' type="text" defaultValue={label} onChange={onLabelChange}/>
        <input className='price' type="number" defaultValue={price} onChange={onPriceChange}/>
      </ul>
    </>
  )
}

export default Item
