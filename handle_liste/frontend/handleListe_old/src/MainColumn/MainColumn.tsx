import React, { useState } from 'react'

import '../App.sass'

import ListComponent from '../List/ListComponent';
import type { ListComponentProps } from '../List/ListComponent';


type ListsProps = {
  lists: ListComponentProps[]
}

function Lists({ lists }: ListsProps) {
  return (
    <>
      {lists && lists.map((list, idx) => (
        <ListComponent key={idx} title={list.title} content={list.content} />
      ))}
    </>
  );
}

function MainColumn() {
  const [lists, setLists] = useState<ListComponentProps[]>([
    {
      title: 'Untitled',
      content: [
        {name: '', cost: 0, checked: false},
        
      ]
    }
  ])

  const addList = () => {
    setLists([
      ...lists,
      {
        title: 'Untitled',
        content: []
      }
    ]);
  }  

  return (
    <>
      <main id='MainColumn'>


            <Lists lists={lists} />

            {/* <ListComponent title='List title' content={[
              {name: 'Bread', cost: 30, checked: true},
              {name: 'Butter', cost: 30, checked: false},
              {name: 'Peperoni pizza with real tomatoes', cost: 40, checked: false}
            ]}/> */}
            
            <button id="create_list" className="create_button" onClick={addList}>+</button>
      </main>
    </>
  )
}

export default MainColumn
