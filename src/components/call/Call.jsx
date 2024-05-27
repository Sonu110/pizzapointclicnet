import React from 'react'
import './Call.css'
import { IoCallOutline } from "react-icons/io5";
function Call() {
  return (
    <section class="call-buton"><a class="cc-calto-action-ripple" href="tel:9999999">
       <i> <IoCallOutline></IoCallOutline></i>
      
    </a>
    </section>
  )
}

export default Call