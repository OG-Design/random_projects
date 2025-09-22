
import { useState } from 'react'
import './App.sass'

import type { imageType, fill_auto } from '../type/imageType'

type ImageGallery_FixedHeight_FlexRow_props = {
    image: imageType[]
}

function ImageGallery_FixedHeight_FlexRow( {image}: ImageGallery_FixedHeight_FlexRow_props, fill_auto: fill_auto) {
  
    const [count, setCount] = useState(0)

  return (
    <>
        <section>
            {image.map((img, idx) =>(
              <Image_fill width={fill_auto.width} height={fill_auto.height} />
            ))}
        </section>
    </>
  )
}

export default ImageGallery_FixedHeight_FlexRow
