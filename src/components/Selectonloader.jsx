import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
function Selectonloader() {
  return (
      <div>
    <div style={{  display:"grid" , gridTemplateColumns:"1fr", backgroundColor:"white" }}>
  
  <Skeleton  style={{height:"20vh"}}/>

  <Skeleton  style={{height:"30vh"}}/>

  <Skeleton  style={{height:"10vh"}}/>
</div>
</div>
  )
}

export default Selectonloader