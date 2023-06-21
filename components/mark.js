import { useState } from 'react'
import Image from 'next/image'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

const Mark = () => {
    const [marked, setMarked] = useState(false)

    return (
        <Image 
            src={marked ? bookmarkIconFill : bookmarkIcon} 
            onClick={() => setMarked(pre => !pre)}
            alt="bookmark-svg"
        />
    )
}

export default Mark