import React from 'react'
import { Link } from 'react-router-dom'

function Dashbordcardhomepage() {
  return (

        
     
    <main>


      
       <div class="pt-6 px-4">
<div class="container px-5 py-24 mx-auto">
<div class=" flex flex-wrap -m-4 text-center">
  
  {

  [

    {
      id:1,
      name:"products",
      path:"/dashbord/restorent",
      num:"2000"
    },
  
    {
      id:2,
      name:"Odder",
      path:"/dashbord/order",
      num:"4000"
    },
  
    {
      id:3,
      name:"Users",
      path:"/dashbord/users",
      num:"2000"
    }
  


].map((item)=>
  
 <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
  
   <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
     <div>
       <h2 class="text-gray-900 text-lg font-bold">Total {item.name}</h2>
       <h3 class="mt-2 text-xl font-bold text-blue-500 text-left">+ {item.num} ₭</h3>
     
        <Link to={item.path}>
       <button class="text-sm mt-6 px-4 py-2 bg-blue-400 text-white rounded-lg  tracking-wider hover:bg-blue-300 outline-none">Click To see</button>
        </Link>
     </div>
     <div
       class="bg-gradient-to-tr from-blue-500 to-blue-400 w-32 h-32  rounded-full shadow-2xl shadow-blue-400 border-white  border-dashed border-2  flex justify-center items-center ">
       <div>
         <h1 class="text-white text-2xl">{item.name}</h1>
       </div>
     </div>
   </div>
 </div>
  )}
  
  


 
</div>
</div>


       </div>
    </main>
   
 
 
 

  )
}

export default Dashbordcardhomepage