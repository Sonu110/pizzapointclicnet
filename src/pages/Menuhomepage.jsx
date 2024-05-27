import React, { useEffect, Suspense, lazy } from 'react';
import MenuContainer from '../components/MenuContainer';
import Menusrollbar from '../components/Menusrollbar';
import RowContainer from '../components/RowContainer';
import { Menu } from '../utils/Products';
import { categories, restorent } from '../utils/data';
import Pizzaloader from '../components/Pizzaloader';
import { Cards } from '../components/Cards';

const Menuvideo = lazy(() => import('../components/Menuvideo'));

function Menuhomepage() { 

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Suspense fallback={<Pizzaloader></Pizzaloader>}>
        <Menuvideo />
      </Suspense>
      <div>
        <MenuContainer users={categories} />
  <div className='  place-content-center  grid  gap-4 px-14  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
    
    
    {
      
      Menu.icecreams.map((i)=>
        
<Cards img={ i.imageSrc} name={i.name}></Cards>
)

}
</div>      
      </div>
    </>
  );
}

export default Menuhomepage;
