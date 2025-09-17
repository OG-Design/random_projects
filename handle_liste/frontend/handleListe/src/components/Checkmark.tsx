import { useState } from 'react'
import '../App.sass'

import type { checkmark } from '../types/checkmark'

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
