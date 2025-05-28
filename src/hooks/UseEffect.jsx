import React, { useState } from 'react'

export default function UseEffect() {
    const [widthCount,setWidthCount] = useState(window.screen.width)
const currentScreenWidth = ()=>{
    setWidthCount(()=> window.innerWidth)
}



useState(()=>{
    window.addEventListener("resize" ,currentScreenWidth )
})

  return (
<>
<div className="h-screen w-full flex justify-center items-center text-white text-3xl" >
<h1>The Size Of Window is : <span className='text-cyan-700' >{widthCount}</span></h1>


</div>







</>  )
}
