import React, { useState } from 'react'
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr";

function Additem() {

  const [count,setCount] = useState(0);

  const Increase = () => {
     setCount(count + 1)
  }

  const Decrease = () => {
    if(count > 0)
      setCount(count -1)
  }



  return (
  <>
    
    <div className='flex items-center gap-5 mt-3 p-2'>
    <GrSubtractCircle onClick={Decrease} className='cursor-pointer text-2xl' />
    <div className='bg-red-600 text-white text-xl rounded-full p-2 '>
     <button className='h-10 w-10'>{count}</button>
    </div>
    <GrAddCircle onClick={Increase} className='cursor-pointer text-2xl' />
    </div>
  
  
  
  
  
  
  </>
  )
}

export default Additem