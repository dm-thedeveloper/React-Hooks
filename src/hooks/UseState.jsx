import React, { useEffect, useState } from 'react'

export default function UseState() {
const [count,setCount] = useState(0)

const minus = ()=>{
    if(count ===0) return;


    setCount((prev) =>prev-1)
 }


 useEffect(()=>{
    window.title = "fff"
 } )

  return (
<>
<div className="h-screen w-full  text-white flex justify-center items-center flex-col">

<h1 className='text-3xl' >useState() Hook</h1>

<div className="h-[150px] w-[50px] bg-gray-700 mt-[20px] flex justify-center items-center flex-col gap-5">

<button onClick={minus} className='border-b-2 w-full h-[30%] flex justify-center items-center'>  <i class="fa-solid fa-minus"></i></button>
<h1>{count}</h1>
<button onClick={()=>setCount((prev) => prev+1)} className='border-t-2 w-full h-[30%] flex justify-center items-center'><i class="fa-solid fa-plus"></i></button>


</div>








</div>




</>  )
}
