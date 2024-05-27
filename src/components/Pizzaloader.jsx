import React from 'react'
import  loader  from  '../assets/img/Pizza-sliced.gif'

function Pizzaloader() {
  return (
    <div  className=' fixed  top-0   left-0 right-0  z-50   bg-white bottom-0  flex items-center   justify-center'>
        <img src={loader} alt="" className=' w-24' />
    </div>
  )
}

export default Pizzaloader