import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  // style={{backdropFilter:'blur(20px)',  backgroundColor:'rgb(255 255 255 / 90%);'}}
  return (

      <header >
        
        <nav  className=' flex-wrap flex z-50  fixed     left-0 right-0 top-0 text-white  shadow-sm  border-solid  border-b-2 border-white  px-14 p-4  items-center justify-between'>
          <div className="logo font-bold text-3xl">Pizza.Point
          </div>
        <div className="navlist  flex gap-4 items-center   font-semibold ">
           <Link   to={'/'}   className='  focus:text-lg  focus:text-blue-500 hover:border-b-2 border-blue-900 '>Home</Link>
           <a href=""  className='  focus:text-lg  focus:text-blue-500 hover:border-b-2 border-blue-900 '>About</a>
           <Link   to={'/menu'} className='  focus:text-lg  focus:text-blue-500 hover:border-b-2 border-blue-900 '>Menu</Link>
           <a href="" className='  focus:text-lg  focus:text-blue-500 hover:border-b-2 border-blue-900 '>Contact</a>
           <div className=' bg-blue-900 p-2 px-5 text-white rounded-md   cursor-pointer hover:bg-blue-950 '>Login</div>
        </div>
        </nav>
        
</header>
  )
}

export default Navbar