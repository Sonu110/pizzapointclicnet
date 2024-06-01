import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Odersucessfull({setoder}) {

    const navgitor = useNavigate()

    function changes()
     {
        setoder(false) 
        navgitor('/')   
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

  return (
    <div>
    <div class="bg-gray-100 h-screen flex items-center">
          <div class="bg-white p-6  md:mx-auto">
            <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
            </svg>
            <div class="text-center">
                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Oders Done</h3>
                <p class="text-gray-600 my-2">Thank you for completing your Oder. go and have new oders</p>
                <p> Have a great day!  </p>
                <div class="py-10 text-center">
                    <div onClick={changes} class="px-12 cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                        GO BACK 
                   </div>
                </div>
            </div>
        </div>
      </div></div>
  )
}

export default Odersucessfull