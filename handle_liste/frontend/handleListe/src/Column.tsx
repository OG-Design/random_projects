import { useState, useEffect } from 'react'
import './App.sass'

import List from './components/List'
import type { list } from './types/list';
import { fetchLists } from './services/listService';
import type { item } from './types/item'

function Column() {
  const [data, setData] = useState<list[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  // fetch & process data
  useEffect(()=>{
    
    let active = true
    const load = async () => {
      try { // try fetchLists
        const lists = await fetchLists()
        if (active) {
          setData(lists)
        }
      } catch (e) {
        if (active) {
          setError(e instanceof Error ? e.message : String(e))
        }
      }
      

    }
    load()
    return () => { active = false }
    
  }, [/*[] so useEffect doesn't run on every render*/]);

  const handleAddItem = (listIndex: number) => {
    setData(prev => {
      if (!prev) return prev

      const newItem: item = {
        id: typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2),
        label: '',
        price: 0,
        marked: false,
      }

      return prev.map((lst, idx) =>
        idx === listIndex
          ? { ...lst, items: [...lst.items, newItem] }
          : lst
      )
    })
  }
  const handleItemChange = (listIndex: number, id: item['id'], patch: Partial<item>) => {
    setData(prev => {
      if (!prev) return prev
      return prev.map((lst, i) =>
        i === listIndex
          ? {
              ...lst,
              items: lst.items.map(it => (it.id === id ? { ...it, ...patch } : it)),
            }
          : lst // IMPORTANT: return the original list for other indices
      )
    })
  }
  return (
    <>
      <section>
        {error && <p className="error">{error}</p>}
        {data?.filter(Boolean).map((lst, idx) => (
          <List
            key={lst.id ?? idx}
            title={lst.title}
            items={lst.items}
            onAddItem={() => handleAddItem(idx)}
            onItemChange={(id, patch) => handleItemChange(idx, id, patch)}
          />
        ))}
      </section>
    </>
  )
}

export default Column
