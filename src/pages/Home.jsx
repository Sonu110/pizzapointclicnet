import React, { useEffect, Suspense, lazy } from 'react';
import Menusrollbar from '../components/Menusrollbar'
import Catelock from '../components/Catelock'
import Pizzaloader from '../components/Pizzaloader'
const Herosection = lazy(() => import('../components/Herosections'));

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Suspense fallback={<Pizzaloader></Pizzaloader>}>
     
      <Herosection></Herosection>
      </Suspense>
     <Menusrollbar></Menusrollbar>
     <Catelock></Catelock>
   
  
    </div>
  )
}

export default Home