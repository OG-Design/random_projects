# React + TS project plan

---

## 1. Project Overview
- **name:** HandleListe
- **goal:**
- **Target users:**
- **Key features:**
- [ ] List/s
- [ ] Item/s
- [ ] Get, Edit, Delete Item's, List's

---

## 2. Tech Stack
- **Frontend:** React + TypeScript
- **State Management:** React's state management
- **UI Library:** Custom
- **Routing:** If used, React Router
- **Build Tooling:** Vite
- **Other Tools:** 

---

## 3. Architecture & Main Folders 
```bash
src/

components/ # Reusable ui elements

pages/  # Route based traffic

features/ # Feature-specific logic and components

hooks/ # Custom hooks

context/ # Global state/context

services/ # API calls, external services

types/ # Typescript types/interfaces

utils/ # Helper functions

assets/ # Images, fonts, etc
```

---

## 4. Data and API Plan
- **Data Sources:**
- **API Endpoints:**
- **Types/Interfaces:**
- **Error Handling Strategy:**
- **Caching/State Strategy:**

---

## 5. UI/UX Wireframes/Designs
- **Design Tools:** Figma
- **Screen to Design:**
- [ ] HomeScreen
- [ ] Settings
- [ ] Login


## 6. Feature Breakdown & Roadmap
### MVP
- [x] Setup Project with React, TS, ESLint, Prettier
- [ ] Home Design implementation in components
    - [ ] List Component Type Props
    - [ ] Item files
        | Location | Name | functional? |
        | :--- | :---: | ---: | 
        | /components | Item.tsx | no |
        | /types | itemProps.ts | no |

    - [ ] Checkmark files
        | Location | Name | functional? |
        | :--- | :---: | ---: | 
        | /components | Checkmark.tsx | no |
        | /types | checkmark.ts | no |
- [ ] Create Basic Routing (Home, Settings)
- [ ] Implementation of Authentication

### Phase 2.
- [ ] Connect API and Display Data
- [ ] 

### Phase 3.
- [ ] Add offline support
- [ ] Refine UI and Animations
- [ ] Performance Optimitation

---

## 7. Testing Plan

---

## 8. Deployment Plan
- **Hosting Plan:** Self Host
- **CI/CD:** 
- **Enviroment Variables:**

## 9. Maintenence
- **Code Style & linting:** 
- **Git Workflows:**


## 10. Psuedo

### json
    public/lists/lists.json
```json
[
    {
        "title":"",
        "delete-state":"30",
        "id":"0"
        "items":[
            {
            "label":"",
            "checked":"",
            "price":"",
            "id":"0"
            }
        ]
    }
]
```
### type
```ts
// src/types/item.ts
type item = {
    label: string,
    price: number,
    checked: boolean,
    id: number
}

// src/types/list.ts
type list = {
    title: string,
    delete_state: number,
    items: item[],
    id: number
}
```

### components
```tsx

// Item component
import type item from '../type/item'
function Item({label, price, checked, id}: item) {
    return (
        <>
            <li>
                <button className={`${checked ? 'item_checked': 'item_check'}`}>✓</button>
                <div className='item_right'>
                    <div className='item_text'>{label? label : ''}</div>
                    <div className='item_price'>kr {price},-</div>
                </div>
            </li>
        </>
    )
}


export default Item;
// Item component END

// List component
import type list from '../type/list.ts'
import type item from '../type/item.ts'
import {Item} from '../components/Item'

import {useState, useEffect} from 'react'

function List({title, delete_state, items, id}: list) {
    
    return (
        <section key={id}>
            <h1>{title}</h1>
            <ol>
                 
                
                {
                    items.map((item, key) => (
                    <Item
                        key={item.id}
                        label={item.label}
                        price={item.price}
                        checked={item.checked}
                        id={item.id}
                    />
                ))}
                
            </ol>
            <button>Add item</button>
        </section>
    )
}
// List component END

// ListRenderer
// react imports
import {useEffect, useState} from 'react'

// type import
import type item from '../type/item.ts'
import type list from '../type/list.ts'
// components import 
import {Item} from '../components/Item'
import {List} from '../components/List'

function ListRenderer() {
    const [lists, setLists] = useState(||null);
    const listPath = '/lists/lists.json';

    // get lists
    useEffect(()=>{
        async function fetchLists() {
            const result = await fetch(listPath);
            if (!ignore) {
                setLists
            }
        }
        let ignore = false
        fetchLists();
        return () => {
            ignore = true;
        }, [lists]
    });


    // render
    return
    (

    )
}
export default ListRenderer


```

### functions
```tsx
```