
import { useState } from 'react'
import './App.sass'

import type { fill_auto, imageType } from '../type/imageType'

export function Image_fill( {path, alt}: imageType, {width, height}: fill_auto) {
  
  return (
    <>
        <img 
            src={path} 
            alt={alt} 
            width={width} 
            height={height} 
        />
    </>
  )
}


