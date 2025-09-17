import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title='How does usestate() work?' example={
          `
      function Item({marked}: checkmark) {
            const [check_check, set_check_check] = useState(marked)
            function set_check() {
                
                set_check_check(prev => {
                    const next = !prev
                    console.log('toggle check: ', next)
                    
                    return next
                })
                
            }
                
            
            return (
                <>
                    
                    <button className='checkmark' onClick={set_check}>
                        ✓
                    </button>
                    
                </>
            )
        }

        export default Item

          `
        } 
        paragraph={[
            'useState(marked) runs once on the first render. It seeds local state from the marked prop. If marked changes later, the local state will not auto-update unless you sync it.', 
            'set_check_check(prev => !prev) is a functional update. React gives you the previous state value (prev), which is always correct even if multiple updates are batched. You return the next state (!prev.)',
            'State updates are async and batched. Code after set_check_check runs before React re-renders, so reading check_check immediately after calling set_check_check will show the old value.', 
            'Closures capture old render calues. Inside your updater, referencing check_check refers to the value from the render that created that function, not the just-computed next value. Log prev/next'
          ]}
      />
    </>
  )
}

export default App
