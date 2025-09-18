import { useState } from 'react'
import '../App.sass'

import type { checkmark } from '../types/checkmark'

function Checkmark({marked}: checkmark) {
    
    const className = marked ? 'checkmark is_checked': 'checkmark'

    return (
        <>
            
            <span className={className}>
                ✓
            </span>
            
        </>
    )
}

export default Checkmark
